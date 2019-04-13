/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 14:31:02 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:47
 * Express 缓存优化处理
 */
module.exports = function renderAndCache(app, req, res, pagePath, queryParams) {
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      res.send(html);
    }).catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};
