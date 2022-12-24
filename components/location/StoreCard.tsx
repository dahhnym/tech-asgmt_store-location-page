import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import CONTACT from './../../public/icon/contact.svg';

interface StoreCardProps {
  storeIdx: number;
  storeName: string;
  mainAddress: string;
  contact: string;
  image: StaticImageData;
}

const StoreCard: React.FC<StoreCardProps> = data => {
  return (
    <div>
      <ImgWrapper>
        <Image
          src={data.image}
          alt={data.storeName}
          fill={true}
          placeholder="blur"
        />
      </ImgWrapper>
      <StoreInfoContainer>
        <Name>{data.storeName}</Name>
        <Addr>{data.mainAddress}</Addr>
        <Contact>
          <Image src={CONTACT} alt="전화" width={'20'} />
          <span>{data.contact}</span>
        </Contact>
      </StoreInfoContainer>
    </div>
  );
};

export default StoreCard;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
`;

const StoreInfoContainer = styled.ul`
  li {
    line-height: 1.8rem;
  }
`;

const Name = styled.li`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
`;

const Addr = styled.li`
  font-size: 0.875rem;
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
