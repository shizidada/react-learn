import { Model } from 'dva';

export const NAMESPACE = 'menu';

export interface MenuModelType extends Model {
  state: MenuModelState;
}

export interface MenuModelState {
  // SliderMenu selected key
  selectedKeys: string[];
  // SliderMenu selected open key
  openKeys: string[];

  collapsed: boolean;

}

const MenuModel: MenuModelType = {
  namespace: NAMESPACE,

  state: {
    collapsed: false,
    selectedKeys: ['/'],
    openKeys: [],
  },

  effects: {},

  reducers: {
    updateMenuStore(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    setup({ history, dispatch }): void {
      history.listen(({ pathname, search }): void => {
        dispatch({
          type: 'updateMenuStore',
          payload: {
            selectedKeys: [pathname],
          },
        });
      });
    },
  },
}

export default MenuModel;
