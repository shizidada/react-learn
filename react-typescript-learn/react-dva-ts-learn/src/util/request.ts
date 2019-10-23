import axios from 'axios';
import qs from 'qs';
// import { isPlainObject } from 'lodash'

const BASE_URL = 'http://moose.api.com:8080';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

const getToken = () => {
  return localStorage.getItem('token');
};

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  withCredentials: true, // 设置axios跨域
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const get = (url: string, data: object = {}) => {
  return instance.get(url, data);
};

export const post = (url: string, data: object = {}) => {
  return instance.post(url, qs.stringify(data));
};
