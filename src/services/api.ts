import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ahomolmulti.classcode.com.br/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});
