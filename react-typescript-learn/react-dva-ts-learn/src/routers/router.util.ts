export const findAllInstallRouter = (router: any) => {
  let routers: any = [];
  router.forEach((item: any) => {
    if (item.component && item.path) {
      if (item.path !== '/user' || item.path !== '/') {
        routers.push({
          ...item,
          routes: !!item.routes,
        });
      }
    }
    if (item.routes) {
      routers = routers.concat(findAllInstallRouter(item.routes));
    }
  });
  return routers;
};
