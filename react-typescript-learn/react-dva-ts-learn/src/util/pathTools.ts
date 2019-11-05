import pathToRegexp from 'path-to-regexp';
import { MenuConfig } from '../config/menu.config';

export function urlToList(url: string) {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
}

export const getFlatMenuKeys = (menuData: MenuConfig[]) => {
  let keys: string[] = [];
  menuData.forEach((item: MenuConfig) => {
    if (item.path) keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

export const getMenuMatches = (flatMenuKeys: string[], path: string) =>
  flatMenuKeys.filter(item => {
    if (item) {
      return pathToRegexp(item).test(path);
    }
    return false;
  });

export const getDefaultCollapsedSubMenus = (pathname: string, flatMenuKeys: string[]) => {
  return urlToList(pathname)
    .map(item => getMenuMatches(flatMenuKeys, item)[0])
    .filter(item => item);
};

export const getRootSubmenuKey = (data: MenuConfig[]) => {
  const keys: string[] = [];
  data.map((item: MenuConfig) => {
    if (item.children) {
      // findRootSubmenuKes(item.children);
    }
    keys.push(item.path as string);
  });
  return keys;
};
