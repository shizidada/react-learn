/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 09:25:23 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:01:36
 */

import Router from "next/router";

/**
   "routeChangeStart"
   "routeChangeComplete"
   "routeChangeError"
   "beforeHistoryChange"
   "hashChangeStart"
   "hashChangeComplete";
 */

Router.onRouteChangeStart = (url) => {
  console.log("onHashChangeStart => ", url);
}

Router.onRouteChangeComplete = (url) => {
  console.log("onRouteChangeComplete => ", url);
}

Router.onRouteChangeError = (url) => {
  console.log("onRouteChangeError => ", url);
}