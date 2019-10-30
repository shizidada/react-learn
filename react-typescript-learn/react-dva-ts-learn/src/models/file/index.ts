import { Model } from 'dva';
import { NAMESPACE } from './constants';
import { getExcelInfo } from './service';

// import { ConnectState } from "../../typings";
export * from './selectors';

export interface FileModelType extends Model {
  state: FileModelState;
}

export interface FileModelState {}

const FileModel: FileModelType = {
  namespace: NAMESPACE,

  state: {
    message: '',
    isLoading: false,
    recordList: [],
  },

  reducers: {
    // change model data
    updateFileStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *getExcelInfo(action, { call, put, select }) {
      yield put({ type: 'updateFileStore', payload: { message: '', isLoading: true } });
      const { payload } = action;
      console.log('getExcelInfo :: ', payload);
      try {
        const res = yield call(getExcelInfo, { ...payload });
        const { status } = res;
        if (status === 200) {
          const { data } = res.data;
          yield put({
            type: 'updateFileStore',
            payload: { message: '获取数据成功', recordList: data, isLoading: false },
          });
        }
      } catch (error) {
        console.error('getExcelInfo :: ', error);
        yield put({
          type: 'updateFileStore',
          payload: { message: error.message, isLoading: false },
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
