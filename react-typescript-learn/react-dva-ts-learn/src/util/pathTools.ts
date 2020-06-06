import pathToRegexp from 'path-to-regexp';
import { SliderMenuConfig } from '../typings';

export function urlToList(url: string) {
  const urlList = url.split('/').filter(i => i);
  return urlList.map((urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}

export const getFlatMenuKeys = (menuData: SliderMenuConfig[]) => {
  let keys: string[] = [];
  menuData.forEach((item: SliderMenuConfig) => {
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

export const getRootSubMenuKey = (data: SliderMenuConfig[]) => {
  const keys: string[] = [];
  data.map((item: SliderMenuConfig) => {
    if (item.children) {
      // findRootSubmenuKes(item.children);
    }
    keys.push(item.path as string);
  });
  return keys;
};
