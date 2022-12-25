import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
`;

const StoreInfoContainer = styled.ul`
  li {
    line-height: 1.3rem;
  }
`;

const Name = styled.li`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Addr = styled.li`
  font-size: 0.875rem;
  word-break: keep-all;
`;

const Contact = styled.li`
  position: relative;
  margin-top: 20px;
  border: solid 2px #174882;
  border-radius: 22px;
  text-align: center;
  height: 38px;
  span {
    color: #174882;
    font-weight: bold;
    line-height: 38px;
  }
  img {
    vertical-align: -0.2rem;
    margin-right: 0.5rem;
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    height: 44px;
    span {
      line-height: 44px;
    }
  }
`;

export { ImgWrapper, StoreInfoContainer, Name, Addr, Contact };
