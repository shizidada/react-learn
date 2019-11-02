import { Model } from 'dva';

export const NAMESPACE = 'menu';

export interface MenuModelType extends Model {
  state: MenuModelState;
}

export interface MenuModelState { }

const MenuModel: MenuModelType = {
  namespace: NAMESPACE,

  state: {
    menuData: [],
  },

  effects: {},

  reducers: {
    save(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
}

export default MenuModel;
