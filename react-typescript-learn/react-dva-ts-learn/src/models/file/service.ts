import { get } from '../../util/request';

export const getExcelInfo = (params: object) => get('/api/v1/excel/list', params);
