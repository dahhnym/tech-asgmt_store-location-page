import Image from 'next/image';
import Logo from './../../public/ala_logo.png';
import Cart from './../../public/icon/cart.svg';
import Account from './../../public/icon/account.svg';
import Hamburger from './../../public/icon/hamburger-menu.svg';
import { NAV_TAB_NAME } from '../../constants/Gnb';
import Link from 'next/link';
import * as S from './Navigation.style';

const Navigation = () => {
  return (
    <S.Header>
      <Link href="/">
        <S.ImgContainer>
          <Image
            src={Logo}
            fill={true}
            sizes="(max-width: 768px) 90vw"
            alt="알라카르테"
          />
        </S.ImgContainer>
      </Link>
      <S.Nav>
        <ul className="container_menu">
          <li>{NAV_TAB_NAME.TAB_1}</li>
          <li>{NAV_TAB_NAME.TAB_2}</li>
          <li>{NAV_TAB_NAME.TAB_3}</li>
          <li>{NAV_TAB_NAME.TAB_4}</li>
          <li>{NAV_TAB_NAME.TAB_5}</li>
        </ul>
        <ul className="container_icon-menu">
          <li className="icon_cart">
            <Image src={Cart} alt={NAV_TAB_NAME.TAB_6} width={28} height={28} />
          </li>
          <li>
            <Image
              src={Account}
              alt={NAV_TAB_NAME.TAB_7}
              width={25}
              height={25}
            />
          </li>
          <li className="icon_menu">
            <Image src={Hamburger} alt="메뉴" width={25} height={25} />
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
};

export default Navigation;
