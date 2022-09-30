import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/image/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
  const [searchResults, setSearchaccounts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchaccounts([1, 2, 3]);
    }, 0);
  });

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Logo" />
        </div>
        <Tippy
          visible={searchResults.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search Accouts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
