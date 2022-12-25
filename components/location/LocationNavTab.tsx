import Link from 'next/link';
import { LOCATION } from '../../constants';
import { useState, useEffect } from 'react';
import { NavControlProps } from './NavControl';
import ReactDOM, { createPortal } from 'react-dom';
import Image from 'next/image';
import Cancel from './../../public/icon/cancel.svg';
import * as S from './LocationNavTab.style';

interface Props extends NavControlProps {
  isFilterOpen: boolean;
  onCloseClick: () => void;
}

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
    setClientWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [clientWidth]);

  const NavTab = () => {
    return (
      <S.Nav isOpen={isFilterOpen}>
        <ul>
          {isFilterOpen && (
            <li className="title">
              필터
              <button type="button" onClick={onCloseClick}>
                <Image src={Cancel} width="20" alt="닫기" />
              </button>
            </li>
          )}
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
      </S.Nav>
    );
  };

  const BottomNavBar = () => {
    return (
      <S.Wrapper isOpen={isFilterOpen}>
        <div>
          <NavTab />
        </div>
      </S.Wrapper>
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
