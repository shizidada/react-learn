/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 14:28:54 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:55
 * 
 * node http模块 作为服务
 */
import { createServer } from "http";

const port = parseInt(process.env.PORT, 10) || 8080;

module.exports = (handle) => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // if (pathname === '/a') {
    //   app.render(req, res, '/b', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/a', query)
    // } else {
    // }

    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  })
}