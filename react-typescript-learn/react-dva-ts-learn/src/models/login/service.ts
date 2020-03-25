import { post } from '../../util/request';

export interface LoginParam {
  accountName: string;
  password: string;
}

export interface RegisterParam extends LoginParam {
  rePassword: string;
  phone: string;
}

export const login = (params: LoginParam) => post('/api/user/login', params);

export const register = (params: RegisterParam) => post('/api/user/register', params);
