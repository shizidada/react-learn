import { Model } from 'dva';
import { loremIpsum } from 'lorem-ipsum';

export const NAMESPACE = 'home';

const delay = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

const list: any[] = Array(12000)
  .fill({})
  .map((val, idx) => {
    return {
      id: idx,
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    };
  });

export interface HomeModelType extends Model {
  state: HomeModelState;
}

export interface HomeModelState {
  name: string;
  count: number;
  list: any[];
}

const HomeModel: HomeModelType = {
  namespace: NAMESPACE,

  state: {
    name: 'TypeScript from dva',
    count: 0,
    list
  },

  reducers: {
    add(state: HomeModelState, { payload }) {
      return { ...state, count: state.count + 1 };
    },
    minus(state: HomeModelState, { payload }) {
      return { ...state, count: state.count - 1 };
    }
  },

  effects: {
    *addWithDelay(action, { call, put, select }) {
      yield call(delay, 500);
      yield put({ type: 'add' });
    }
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {});
    }
  }
};

export default HomeModel;
