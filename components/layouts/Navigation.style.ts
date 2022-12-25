import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
  height: 100px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    height: 80px;
    padding: 0 1.8rem;
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
    @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      display: none;
    }
  }
  ul.container_icon-menu {
    width: 10%;
    min-width: 100px;
    grid-template-columns: repeat(2, 1fr);
    li {
      text-align: right;
    }
    li.icon_menu {
      display: none;
    }
    @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      li.icon_cart {
        display: none;
      }
      li.icon_menu {
        display: block;
      }
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    justify-content: flex-end;
  }
`;

export { Header, ImgContainer, Nav };
