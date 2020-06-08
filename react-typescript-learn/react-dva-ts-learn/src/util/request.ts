// import * as React from 'react';
// , { AxiosRequestConfig, AxiosResponse }
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import qs from 'qs';

interface ErrorMessage {
  message: string;
}

const BASE_URL = 'http://localhost:7000';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  withCredentials: true
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // eslint-disable-next-line no-console
    console.log('instance.interceptors.request.cinfig :: ', config);
    return config;
  },
  (error: ErrorMessage) => {
    // eslint-disable-next-line no-console
    console.log('instance.interceptors.request.error :: ', error);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res;
    // eslint-disable-next-line no-console
    console.log('instance.interceptors.response.data :: ', data);
    if (data.code === 403) {
      window.location.href = '/login';
    } else {
      return data;
    }
  },
  (error: ErrorMessage) => {
    // message.error(error.message);
    // eslint-disable-next-line no-console
    console.log('instance.interceptors.response.error :: ', error);
    return Promise.reject(error);
  }
);

export const get = (url: string, data: object = {}) => {
  return instance.get(url, { params: { ...data } });
};

export const post = (url: string, data: object = {}) => {
  return instance.post(url, data);
};
