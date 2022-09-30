import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <main>
          <div className={cx('content')}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
