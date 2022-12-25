import styled from '@emotion/styled';
import Image from 'next/image';
import Logo from './../../public/ala_logo.png';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import Cart from './../../public/icon/cart.svg';
import Account from './../../public/icon/account.svg';
import { NAV_TAB_NAME } from '../../constants/Gnb';

const Navigation = () => {
  return (
    <Header>
      <ImgContainer>
        <Image
          src={Logo}
          fill={true}
          sizes="(max-width: 768px) 90vw"
          alt="알라카르테"
        />
      </ImgContainer>
      <Nav>
        <ul className="container_menu">
          <li>{NAV_TAB_NAME.TAB_1}</li>
          <li>{NAV_TAB_NAME.TAB_2}</li>
          <li>{NAV_TAB_NAME.TAB_3}</li>
          <li>{NAV_TAB_NAME.TAB_4}</li>
          <li>{NAV_TAB_NAME.TAB_5}</li>
        </ul>
        <ul className="container_icon-menu">
          <li>
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
        </ul>
      </Nav>
    </Header>
  );
};

export default Navigation;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
  height: 100px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    height: 52px;
  }
`;

const ImgContainer = styled.div`
  position: relative; // Image 컴포넌트의 fill 속성 사용하기 위해 설정
  min-width: 124px;
  height: 28px;
`;

const Nav = styled.nav`
  width: 100%;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
  ul {
    display: grid;
    li {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
  ul.container_menu {
    width: 90%;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
  }
  ul.container_icon-menu {
    width: 10%;
    min-width: 100px;
    grid-template-columns: repeat(2, 1fr);
    li {
      text-align: right;
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    border: solid 1px violet;
  }
`;
