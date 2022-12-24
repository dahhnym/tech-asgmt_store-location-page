import * as S from './../../components/LocationPage.style';
import NavControl from '../../components/location/NavControl';
import StoreCard from '../../components/location/StoreCard';
import { useStoreData } from '../../hooks/useStoreData';

export type StoreData = {
  contact: string;
  detailAdderss: string;
  isNewStore: boolean;
  mainAddress: string;
  region: string;
  storeIdx: number;
  storeImage: string;
  storeName: string;
};

const LocationPage = () => {
  const endpoint = '/stores';

  const { data: storeData, error, isLoading } = useStoreData(endpoint);

  return (
    <div>
      <NavControl />
      <S.StoreInfoContainer>
        {isLoading && <p>Loading... </p>}
        {!isLoading &&
          storeData.map((item: StoreData) => {
            return <StoreCard key={item.storeIdx} {...item} />;
          })}
      </S.StoreInfoContainer>
    </div>
  );
};

export default LocationPage;
