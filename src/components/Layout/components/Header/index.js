import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ToolTip from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import {
  faCircleXmark,
  faSpinner,
  faSearch,
  faGlobe,
  faEllipsisVertical,
  faKeyboard,
  faCircleQuestion,
  faUserAlt,
  faCoins,
  faGear,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/image/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResults, setSearchaccounts] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchaccounts([]);
    }, 0);
  });

  const handleOnChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUserAlt} />,
      title: 'View profile',
      to: '/',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOutAlt} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Logo" />
        </div>
        <HeadlessTippy
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
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            // <div className={cx('current-user')}></div>
            <>
              <ToolTip delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('actions-btn')}>
                  <UploadIcon />
                </button>
              </ToolTip>
              <button className={cx('actions-btn')}>
                <MessageIcon />
              </button>
              <button className={cx('actions-btn')}>
                <InboxIcon />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2d5d8b982c3675d6eb52f85e0502dd4d~c5_100x100.jpeg?x-expires=1665021600&x-signature=qbAWNByOkAs%2BgWXlY2HvUXWyqy0%3D"
                alt="avatar"
                // fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
