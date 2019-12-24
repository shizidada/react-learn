/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 14:31:02 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-12-24 22:00:49
 * Express 缓存优化处理
 */
module.exports = function renderAndCache(app, req, res, pagePath, queryParams) {
  return cacheableResponse({
    ttl: 1000 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams),
    }),
    send: ({ data, res }) => res.send(data),
  })
};
