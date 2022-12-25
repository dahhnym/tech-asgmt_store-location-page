import NavControl from '../../components/location/NavControl';
import StoreCard from '../../components/location/StoreCard';
import { useStoreData } from '../../hooks/useStoreData';
import { useState } from 'react';
import styled from '@emotion/styled';

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

type StoreInfoContainerProp = {
  count: number;
};

const LocationPage = () => {
  const endpoint = '/stores';

  const { data: storeData, error, isLoading } = useStoreData(endpoint);

  const initialState = '전체';
  const [activeTabName, setActiveTabName] = useState(initialState);

  const filteredData = storeData?.filter(
    (data: StoreData) => data.region === activeTabName,
  );

  const finalData =
    !isLoading && activeTabName === '전체' ? storeData : filteredData;

  return (
    <div>
      <NavControl
        setActiveTabName={setActiveTabName}
        activeTabName={activeTabName}
      />
      <StoreInfoContainer count={finalData?.length}>
        {isLoading && <p>Loading... </p>}
        {!isLoading &&
          finalData.map((item: StoreData) => {
            return <StoreCard key={item.storeIdx} {...item} />;
          })}
      </StoreInfoContainer>
    </div>
  );
};

export default LocationPage;

const StoreInfoContainer = styled.section<StoreInfoContainerProp>`
  display: grid;
  grid-template-columns: ${props =>
    props.count > 3
      ? 'repeat(auto-fit, minmax(330px, 1fr))'
      : 'repeat(3, 1fr)'};
  gap: 38px;
  min-width: 330px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
`;
