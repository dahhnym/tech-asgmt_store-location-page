import Image from 'next/image';
import { StoreData } from '../../pages/location';
import CONTACT from './../../public/icon/contact.svg';
import * as S from './StoreCard.style';

const StoreCard: React.FC<StoreData> = data => {
  const { contact, detailAdderss, mainAddress, storeImage, storeName } = data;

  return (
    <div>
      <S.ImgWrapper>
        <Image src={storeImage} alt={storeName} fill={true} />
      </S.ImgWrapper>
      <S.StoreInfoContainer>
        <S.Name>{storeName}</S.Name>
        <S.Addr>{`${mainAddress} ${detailAdderss}`}</S.Addr>
        <S.Contact>
          <Image src={CONTACT} alt="전화" width={'20'} />
          <span>{contact}</span>
        </S.Contact>
      </S.StoreInfoContainer>
    </div>
  );
};

export default StoreCard;
