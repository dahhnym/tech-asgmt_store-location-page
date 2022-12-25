import Link from 'next/link';
import styled from '@emotion/styled';
import { LOCATION, MEDIA_QUERY_END_POINT } from '../../constants';
import { useState, useEffect, useCallback } from 'react';
import { NavControlProps } from './NavControl';
import ReactDOM, { createPortal } from 'react-dom';
import Image from 'next/image';
import Cancel from './../../public/icon/cancel.svg';

interface Props extends NavControlProps {
  isFilterOpen: boolean;
  onCloseClick: () => void;
}

type FilterProps = {
  isOpen: boolean;
};

const LocationNavTab: React.FC<Props> = ({
  setActiveTabName,
  activeTabName,
  isFilterOpen,
  onCloseClick,
}) => {
  const [clientWidth, setClientWidth] = useState(1920);
  const [isActive, setIsActive] = useState(true);

  const onTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const value = e.currentTarget.innerText;
    setActiveTabName(value);
    if (isActive) {
      return;
    }
    setIsActive(prev => !prev);
  };

  const handleResize = () => {
    setClientWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [clientWidth]);

  const FilterTitle = (
    <li className="title">
      필터
      <button type="button" onClick={onCloseClick}>
        <Image src={Cancel} width="20" alt="닫기" />
      </button>
    </li>
  );

  const NavTab = () => {
    return (
      <Nav isOpen={isFilterOpen}>
        <ul>
          {FilterTitle}
          {LOCATION.map(region => {
            return (
              <li key={region.id}>
                <Link
                  href=""
                  className={
                    region.name === activeTabName && isActive ? 'active' : ''
                  }
                  onClick={e => onTabClick(e)}
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

  const BottomNavBar = () => {
    return (
      <Wrapper isOpen={isFilterOpen}>
        <div>
          <NavTab />
        </div>
      </Wrapper>
    );
  };

  return (
    <>
      {clientWidth < 768 ? (
        typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <BottomNavBar />,
          document.getElementById('portal') as HTMLElement,
        )
      ) : (
        <NavTab />
      )}
    </>
  );
};

export default LocationNavTab;

const Nav = styled.nav<FilterProps>`
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
    li.title {
      display: none;
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    position: absolute;
    @keyframes slideUp {
      from {
        bottom: -50px;
        opacity: 0;
      }

      to {
        bottom: 0px;
        opacity: 1;
      }
    }
    animation: slideUp 0.4s;
    bottom: 0;
    margin: 0;
    width: 100%;
    ul {
      display: block;
      border: none;
      background-color: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      overflow: hidden;
      li {
        a {
          color: #b1b1b1;
        }
        a.active {
          color: #111;
          background-color: #ededee;
        }
      }
      li.title {
        display: block;
        position: relative;
        button {
          position: absolute;
          top: 15px;
          right: 15px;
        }
      }
    }
  }
`;

const Wrapper = styled.div<FilterProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
