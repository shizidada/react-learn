import { Model } from 'dva';
import { menus } from '../../config/menu.config';
import { SliderMenuConfig } from '../../typings';
import { getDefaultCollapsedSubMenus, getFlatMenuKeys, getRootSubMenuKey } from '../../util/pathTools';

export const NAMESPACE = 'menu';

export interface MenuModelType extends Model {
  state: MenuModelState;
}

export interface MenuModelState {
  menuData: SliderMenuConfig[];

  rootSubMenuKeys: string[];

  // SliderMenu selected key
  selectedKeys: string[];
  // SliderMenu selected open key
  openKeys: string[];

  collapsed: boolean;
}

const MenuModel: MenuModelType = {
  namespace: NAMESPACE,

  state: {
    menuData: menus,
    rootSubMenuKeys: getRootSubMenuKey(menus),

    collapsed: true,
    selectedKeys: ['/'],
    openKeys: ['/']
  },

  effects: {},

  reducers: {
    updateMenuStore(state, action) {
      const { payload } = action;
      return {
        ...state,
        ...payload
      };
    },

    changeSelectKeys(state, action) {
      const {
        payload: { selectedKeys, pathname }
      } = action;
      const { menuData } = state;
      const keys = getFlatMenuKeys(menuData);
      const openKeys: string[] = getDefaultCollapsedSubMenus(pathname, keys);
      return {
        ...state,
        openKeys,
        selectedKeys
      };
    }
  },

  subscriptions: {
    setup({ history, dispatch }): void {
      history.listen(({ pathname, search }): void => {
        dispatch({
          type: 'changeSelectKeys',
          payload: {
            pathname,
            selectedKeys: [pathname]
          }
        });
      });
    }
  }
};

export default MenuModel;
