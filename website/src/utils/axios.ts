import axios from 'axios';
import { BASE_URL, JWT_TOKEN_NAME } from './Constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response?.data?.error?.message) {
      console.error(`Error: ${error.response.data.error.message}`);
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

if (typeof localStorage !== 'undefined') {
  const accessToken = localStorage.getItem(JWT_TOKEN_NAME);
  if (accessToken) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}
