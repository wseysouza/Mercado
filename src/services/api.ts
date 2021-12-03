import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ahomolmulti.classcode.com.br/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});
