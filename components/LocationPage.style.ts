import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../constants';

const StoreInfoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 38px;
  min-width: 330px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    /* display: none; */
  }
`;

export { StoreInfoContainer };
