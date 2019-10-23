import { menus } from './menu-config';

export const findNameByPath = (selectedKeys: string[]) => {
  let currentSelect = {};
  selectedKeys.map(selectedKey => {
    menus.map((parentItem, parentIndex) => {
      if (`${parentItem.path}` === selectedKey) {
        currentSelect = {
          parentName: menus[parentIndex].name,
          path: `${menus[parentIndex].path}`,
        };
      } else if (parentItem.childs) {
        parentItem.childs.find(childItem => {
          if (`${childItem.path}` === selectedKey) {
            currentSelect = {
              parentName: menus[parentIndex].name,
              childName: childItem.name,
              path: `${childItem.path}`,
            };
          }
        });
      }
    });
  });
  return currentSelect;
};
