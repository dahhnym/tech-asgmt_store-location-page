import Link from 'next/link';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

const LocationNavTab = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="">전체</Link>
        </li>
        <li>
          <Link href="">서울</Link>
        </li>
        <li>
          <Link href="" className="tab_link">
            경기
          </Link>
        </li>
        <li>
          <Link href="">대전/충청</Link>
        </li>
        <li>
          <Link href="">전라</Link>
        </li>
        <li>
          <Link href="">경상</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default LocationNavTab;

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
