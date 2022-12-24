import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import FilterButton from './FilterButton';
import LocationNavTab from './LocationNavTab';

const NavControl = () => {
  return (
    <Wrapper>
      <FilterButton />
      <LocationNavTab />
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
