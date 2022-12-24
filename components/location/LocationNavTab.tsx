import Link from 'next/link';
import styled from '@emotion/styled';
import { LOCATION, MEDIA_QUERY_END_POINT, REGION } from '../../constants';
import { useState } from 'react';

const LocationNavTab = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const onTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.value;
    setActiveIdx(value);
    if (isActive) {
      return;
    }
    setIsActive(prev => !prev);
  };

  return (
    <Nav>
      <ul>
        {LOCATION.map(region => {
          return (
            <li key={region.id} onClick={e => onTabClick(e)} value={region.id}>
              <Link
                href=""
                className={region.id === activeIdx && isActive ? 'active' : ''}
              >
                {region.name}
              </Link>
            </li>
          );
        })}
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
      a.active {
        color: #fff;
        background-color: #174882;
      }
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: none;
  }
`;
