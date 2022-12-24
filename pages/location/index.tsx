import * as S from './../../components/LocationPage.style';
import Store1 from './../../public/stores/롯데 인천_221013.jpg';
import Store2 from './../../public/stores/현대 울산점_221012.jpg';
import Store3 from './../../public/stores/알라카르테 강남점.jpg';
import NavControl from '../../components/location/NavControl';
import StoreCard from '../../components/location/StoreCard';

const LocationPage = () => {
  const dummyData = [
    {
      storeIdx: 1,
      storeName: '롯데백화점 인천점',
      mainAddress: '인천 미추홀구 연남로 35 롯데백화점 인천점 5층',
      contact: '032.242.2521',
      image: Store1,
    },
    {
      storeIdx: 2,
      storeName: '현대백화점 울산점',
      mainAddress: '인천 미추홀구 연남로 35 롯데백화점 인천점 5층',
      contact: '032.242.2521',
      image: Store2,
    },
    {
      storeIdx: 3,
      storeName: '알라카르테 강남점',
      mainAddress: '서울 강남구 논현로 539 HLI빌딩 B1 알라카르테',
      contact: '02.556.2127',
      image: Store3,
    },
  ];

  return (
    <div>
      <NavControl />
      <S.StoreInfoContainer>
        {dummyData.map(data => {
          return <StoreCard key={data.storeIdx} {...data} />;
        })}
      </S.StoreInfoContainer>
    </div>
  );
};

export default LocationPage;
