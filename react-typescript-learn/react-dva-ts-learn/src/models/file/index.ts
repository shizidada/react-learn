import { Model } from 'dva';
import { NAMESPACE } from './constants';
import { getExcelInfo } from './service';

// import { GlobalState } from "../../typings";
export * from './selectors';

export interface FileModelType extends Model {
  state: FileModelState;
}

export interface FileModelState {}

const FileModel: FileModelType = {
  namespace: NAMESPACE,

  state: {},

  reducers: {
    // change model data
    updateFileStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *getExcelInfo(action, { call, put, select }) {
      yield put({ type: 'updateLoginStore', payload: { errorMessage: '', isLoading: true } });
      try {
        const res = yield call(getExcelInfo);
        console.log('getExcelInfo :: ', res);
      } catch (error) {
        yield put({
          type: 'updateLoginStore',
          payload: { errorMessage: '获取数据失败', isLoading: false },
        });
      }
    },
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {});
    },
  },
};

export default FileModel;
