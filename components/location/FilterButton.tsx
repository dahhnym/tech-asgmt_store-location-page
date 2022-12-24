import styled from '@emotion/styled';
import Image from 'next/image';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import Filter from './../../public/icon/filter.svg';

const FilterButton = () => {
  return (
    <Button>
      필터
      <Image src={Filter} width="20" height="20" alt="" />
    </Button>
  );
};

export default FilterButton;

const Button = styled.button`
  display: none;
  font-weight: bold;
  font-size: 1rem;
  position: absolute;
  right: 0;
  img {
    margin-left: 0.3rem;
    vertical-align: -0.2rem;
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    display: block;
  }
`;
