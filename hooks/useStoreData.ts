import useSWR from 'swr';
import { fetcher } from '../utils/fetchers';

export const useStoreData = (endpoint: string) => {
  return useSWR(endpoint, fetcher);
};
