import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import FilterButton from './FilterButton';
import LocationNavTab from './LocationNavTab';
import { useState } from 'react';

export type NavControlProps = {
  setActiveTabName: Dispatch<SetStateAction<string>>;
  activeTabName: string;
};

const NavControl: React.FC<NavControlProps> = ({
  setActiveTabName,
  activeTabName,
}) => {
  const [isBottomTapOpen, setIsBottomTapOpen] = useState(false);

  const filterClickHandler = () => {
    setIsBottomTapOpen(prev => !prev);
  };

  return (
    <Wrapper>
      <FilterButton onFilterClick={filterClickHandler} />
      <LocationNavTab
        setActiveTabName={setActiveTabName}
        activeTabName={activeTabName}
        isFilterOpen={isBottomTapOpen}
        onCloseClick={filterClickHandler}
      />
    </Wrapper>
  );
};

export default NavControl;

const Wrapper = styled.div`
  position: relative;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    height: 2rem;
  }
`;
