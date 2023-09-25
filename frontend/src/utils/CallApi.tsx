import axios from 'axios';
import { BASE_URL } from '@/utils/constant';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const callAPI = async (resource: any) => {
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
  return data;
};
