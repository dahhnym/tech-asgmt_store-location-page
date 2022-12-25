import axios from 'axios';

export const fetcher = (endpoint: string) => {
  return axios.get(endpoint).then(res => res.data);
};
