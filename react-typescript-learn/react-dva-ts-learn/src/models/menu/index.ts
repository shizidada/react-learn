import { Model } from 'dva';
import { getFlatMenuKeys, getDefaultCollapsedSubMenus, getRootSubmenuKey } from '../../util/pathTools';
import { menus, MenuConfig } from '../../config/menu.config';

export const NAMESPACE = 'menu';

export interface MenuModelType extends Model {
  state: MenuModelState;
}

export interface MenuModelState {
  menuData: MenuConfig[];

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
    rootSubMenuKeys: getRootSubmenuKey(menus),

    collapsed: false,
    selectedKeys: ['/'],
    openKeys: ['/'],
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

    changeSelectKeys(state, action) {
      const {
        payload: { selectedKeys, pathname },
      } = action;
      const { menuData } = state;
      const keys = getFlatMenuKeys(menuData);
      const openKeys: string[] = getDefaultCollapsedSubMenus(pathname, keys);
      return {
        ...state,
        openKeys,
        selectedKeys,
      };
    },
  },

  subscriptions: {
    setup({ history, dispatch }): void {
      history.listen(({ pathname, search }): void => {
        dispatch({
          type: 'changeSelectKeys',
          payload: {
            pathname,
            selectedKeys: [pathname],
          },
        });
      });
    },
  },
};

export default MenuModel;
