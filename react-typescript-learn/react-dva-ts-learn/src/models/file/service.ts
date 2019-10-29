import { get } from '../../util/request';

export const getExcelInfo = (params: any) => get('/api/v1/excel/list', params);
