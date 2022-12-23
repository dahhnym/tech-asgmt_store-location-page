import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 60px;
  @media screen and (max-width: 768px) {
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
  ul {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    border: solid 1px violet;
  }
`;

export { Header, ImgContainer, Nav };