import { Model } from 'dva';
import { menus, MenuConfig } from '../../config/menu.config';

export const NAMESPACE = 'menu';

export interface MenuModelType extends Model {
  state: MenuModelState;
}

export interface MenuModelState {
  menuData: MenuConfig[];

  rootSubmenuKeys: string[];

  // SliderMenu selected key
  selectedKeys: string[];
  // SliderMenu selected open key
  openKeys: string[];

  collapsed: boolean;
}

const rootKeys: string[] = [];
const findRootSubmenuKey = (data: MenuConfig[]) => {
  data.map((item: MenuConfig) => {
    if (item.children) {
      // findRootSubmenuKes(item.children);
    }
    rootKeys.push(item.activeKey);
  });
};
findRootSubmenuKey(menus);
console.log('findRootSubmenuKes ', rootKeys);

const MenuModel: MenuModelType = {
  namespace: NAMESPACE,

  state: {
    menuData: menus,
    rootSubmenuKeys: rootKeys,

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
        payload: { selectedKeys },
      } = action;
      const { menuData } = state;

      // const find = () => {};
      // TODO:
      let openKeys: string[] = [];
      console.log('changeSelectKeys 1 :: ', openKeys, selectedKeys);
      selectedKeys.map((selectedKey: string) => {
        menuData.map((parentItem: MenuConfig, parentIndex: number) => {
          if (parentItem.path === selectedKey) {
            openKeys = [menuData[parentIndex].activeKey] as string[];
          }
          if (parentItem.children) {
            parentItem.children.find(childItem => {
              if (`${childItem.path}` === selectedKey) {
                openKeys = [menuData[parentIndex].activeKey] as string[];
              }
              if (childItem.children) {
                childItem.children.find(subItem => {
                  if (`${subItem.path}` === selectedKey) {
                    openKeys.concat([menuData[parentIndex].activeKey] as string[]);
                  }
                });
              }
            });
          }
        });
      });

      console.log('changeSelectKeys 2 :: ', openKeys, selectedKeys);
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
            selectedKeys: [pathname],
          },
        });
      });
    },
  },
};

export default MenuModel;
