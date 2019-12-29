import axios from 'axios';

import AxiosWrapper from './shared/utils/AxiosWrapper';

const defaultErrorMessage = 'Ocorreu um erro ao executar a operação.';
const defaultSuccessMessage = 'Operação executada com sucesso!';

const header = {
  Pragma: 'no-cache'
};

const axiosInstance = axios.create({
  headers: header,
  baseURL: process.env.REACT_APP_API_URL
});

axiosInstance.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

function handleRequestError(error) {
  let message =
    error.response && typeof error.response.data === 'string' ? error.response.data : null;

  console.log(message || defaultErrorMessage);
}

function handleRequestSuccess(success) {
  let message = success.message;
  console.log(message || defaultSuccessMessage);
}

export default new AxiosWrapper(axiosInstance, {
  defaultErrorHandler: handleRequestError,
  defaultSuccessHandler: handleRequestSuccess
});
