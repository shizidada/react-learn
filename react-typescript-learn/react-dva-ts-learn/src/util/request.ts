import axios from 'axios';
import qs from 'qs';
// import { isPlainObject } from 'lodash'

const BASE_URL = 'http://localhost:8001';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

const getToken = () => {
  return localStorage.getItem('token');
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  withCredentials: true, // 设置axios跨域
  headers: { Authorization: `Bearer ${getToken()}` },
  // transformRequest(data: any) {
  //   if (isPlainObject(data)) data = qs.stringify(data)
  // },
});

// instance.interceptors.request.use((config: AxiosRequestConfig) => {
//   return config;
// }, (error: any) => {
//   return Promise.reject(error);
// });

export const get = (url: string, data: any = {}) => {
  return instance.get(url, data);
}

export const post = (url: string, data: any = {}) => {
  return instance.post(url, qs.stringify(data));
}
