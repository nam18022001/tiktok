//library
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import ToolTip from '@tippyjs/react';

import {
  faGlobe,
  faEllipsisVertical,
  faKeyboard,
  faCircleQuestion,
  faUserAlt,
  faCoins,
  faGear,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

// Routes Config
import config from '~/configs';
// import
import styles from './Header.module.scss';
import images from '~/assets/image/index';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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
  const currentUser = false;

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
          <Link to={config.routes.home}>
            <img src={images.logo} alt="Logo" />
          </Link>
        </div>
        <Search />
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
                <span className={cx('badge')}>12</span>
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
