import { post } from '../../util/request';

export const login = (params: any) => post('/api/v1/account/signin', params);

export const register = (params: any) => post('/api/v1/account/register', params);
