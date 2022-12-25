import Image from 'next/image';
import Cart from './../../../../public/icon/cart.svg';
import Account from './../../../../public/icon/account.svg';
import Hamburger from './../../../../public/icon/hamburger-menu.svg';
import { NAV_TAB_NAME } from '../../../../constants/Gnb';

const IconMenu = () => {
  return (
    <ul className="container_icon-menu">
      <li className="icon_cart">
        <Image src={Cart} alt={NAV_TAB_NAME.TAB_6} width={28} height={28} />
      </li>
      <li>
        <Image src={Account} alt={NAV_TAB_NAME.TAB_7} width={25} height={25} />
      </li>
      <li className="icon_menu">
        <Image src={Hamburger} alt="메뉴" width={25} height={25} />
      </li>
    </ul>
  );
};

export default IconMenu;
