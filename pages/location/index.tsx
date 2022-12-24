import Image from 'next/image';
import * as S from './../../components/LocationPage.style';
import Store1 from './../../public/stores/롯데 인천_221013.jpg';
import Store2 from './../../public/stores/현대 울산점_221012.jpg';
import Store3 from './../../public/stores/알라카르테 강남점.jpg';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import NavControl from '../../components/location/NavControl';

const LocationPage = () => {
  return (
    <div>
      <NavControl />
      <S.StoreInfoContainer>
        <StoreCard>
          <ImgWrapper>
            <Image
              src={Store1}
              alt="롯데백화점 인천점"
              fill={true}
              placeholder="blur"
            />
          </ImgWrapper>
          <ul>
            <li>롯데백화점 인천점</li>
            <li>인천 미추홀구 연남로 35 롯데백화점 인천점 5층</li>
            <li>032.242.2521</li>
          </ul>
        </StoreCard>
        <StoreCard>
          <ImgWrapper>
            <Image
              src={Store2}
              alt="롯데백화점 인천점"
              fill={true}
              sizes={`(max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) 380px, 200px`}
              placeholder="blur"
            />
          </ImgWrapper>
          <ul>
            <li>현대백화점 울산점</li>
            <li>인천 미추홀구 연남로 35 롯데백화점 인천점 5층</li>
            <li>032.242.2521</li>
          </ul>
        </StoreCard>
        <StoreCard>
          <ImgWrapper>
            <Image
              src={Store3}
              alt="롯데백화점 인천점"
              fill={true}
              sizes={`(max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) 380px`}
              placeholder="blur"
            />
          </ImgWrapper>
          <ul>
            <li>알라카르테 강남점</li>
            <li>인천 미추홀구 연남로 35 롯데백화점 인천점 5층</li>
            <li>032.242.2521</li>
          </ul>
        </StoreCard>
      </S.StoreInfoContainer>
    </div>
  );
};

export default LocationPage;

const StoreCard = styled.div`
  border: solid 1px red;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
`;
