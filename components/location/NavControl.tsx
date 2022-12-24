import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import FilterButton from './FilterButton';
import LocationNavTab from './LocationNavTab';

export type NavControlProps = {
  setActiveTabName: Dispatch<SetStateAction<string>>;
  activeTabName: string;
};

const NavControl: React.FC<NavControlProps> = ({
  setActiveTabName,
  activeTabName,
}) => {
  return (
    <Wrapper>
      <FilterButton />
      <LocationNavTab
        setActiveTabName={setActiveTabName}
        activeTabName={activeTabName}
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
