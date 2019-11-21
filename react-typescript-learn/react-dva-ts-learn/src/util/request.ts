// import * as React from 'react';
// import { message } from 'antd';
// , { AxiosRequestConfig, AxiosResponse }
import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://localhost:7000';

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  withCredentials: true,
});

// instance.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     console.log('instance.interceptors.request.cinfig :: ', config);
//     return config;
//   },
//   (error: any) => {
//     console.log('instance.interceptors.request.error :: ', error);
//   },
// );

// instance.interceptors.response.use(
//   (data: any) => {
//     console.log('instance.interceptors.response.data :: ', data);
//     return data;
//   },
//   (error: any) => {
//     message.error(error.message);
//     console.log('instance.interceptors.response.error :: ', error);
//     return Promise.reject(error);
//   },
// );

export const get = (url: string, data: object = {}) => {
  return instance.get(url, { params: { ...data } });
};

export const post = (url: string, data: object = {}) => {
  return instance.post(url, qs.stringify(data));
};
