import axios from 'axios';

import { BASE_API } from './environment';

export const api = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
