import Axios from 'axios';

const axios = Axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const defaultAxios = Axios.create();

export default axios;
