import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://localhost:8000';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const get = (url: string, data: object = {}) => {
  return instance.get(url, data);
};

export const post = (url: string, data: object = {}) => {
  return instance.post(url, qs.stringify(data));
};
