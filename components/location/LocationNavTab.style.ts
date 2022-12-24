import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

const Nav = styled.nav`
  margin-bottom: 2rem;
  ul {
    border: solid 1px #ededee;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    li {
      height: 52px;
      text-align: center;
      line-height: 52px;
      font-weight: bold;
      a {
        display: block;
      }
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: none;
  }
`;

const Button = styled.button`
  display: none;
  font-weight: bold;
  font-size: 0.9rem;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: block;
    border: solid 1px purple;
  }
`;

export { Nav, Button };
