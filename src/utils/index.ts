import { isObject } from '@/utils/is';
import pagesJson from '@/pages.json'

/**
 * 深度合并
 * @param src
 * @param target
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}


/** 判断当前页面是否是tabbar页  */
export const getIsTabbar = () => {
  if (!pagesJson.tabBar) {
    return false
  }
  const pages = getCurrentPages()
  const currPath = pages.at(-1).route
  return !!pagesJson.tabBar.list.find((e) => e.pagePath === currPath)
}
