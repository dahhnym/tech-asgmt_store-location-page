import styled from '@emotion/styled';
import Image from 'next/image';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { StoreData } from '../../pages/location';
import CONTACT from './../../public/icon/contact.svg';

const StoreCard: React.FC<StoreData> = data => {
  const { contact, detailAdderss, mainAddress, region, storeImage, storeName } =
    data;
  return (
    <div>
      <ImgWrapper>
        <Image src={storeImage} alt={storeName} fill={true} />
      </ImgWrapper>
      <StoreInfoContainer>
        <Name>{storeName}</Name>
        <Addr>{`${mainAddress} ${detailAdderss}`}</Addr>
        <Contact>
          <Image src={CONTACT} alt="전화" width={'20'} />
          <span>{contact}</span>
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
