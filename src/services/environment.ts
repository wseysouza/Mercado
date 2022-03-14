const env = {
  dev: 'dev',
  stg: 'stg',
  product: 'product',
};

const API_URL = {
  dev: 'https://ahomolmulti.classcode.com.br/v1/',
  product: 'https://api.multimercados.com.br/v1/',
};

const currentEnv = env.product;

export const BASE_API = API_URL[currentEnv];
