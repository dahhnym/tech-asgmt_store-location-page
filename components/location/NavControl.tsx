import styled from '@emotion/styled';
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
`;
