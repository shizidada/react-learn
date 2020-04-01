const ROUTE_BASE_NAME = process.env.PUBLIC_URL || '';
export const BASE_NAME = ROUTE_BASE_NAME ? ROUTE_BASE_NAME.replace('/', '') : '';
export const OLD_LESS_ID = `less:${BASE_NAME ? `${BASE_NAME}-` : ''}color:old`;
export const LESS_ID = `less:${BASE_NAME ? `${BASE_NAME}-` : ''}color`;
export const LESS_URL = `${ROUTE_BASE_NAME}/less.min.js`;
