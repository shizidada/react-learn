/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 14:31:18 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-12-22 09:24:24
 * Express 作为服务
 */
const path = require('path');
const renderAndCache = require('./cache');
const express = require('express');
const port = parseInt(process.env.PORT, 10) || 8080;

const server = express();

module.exports = (app, handle) => {

  server.get(/\/about$/, (req, res) => {
    // require("fs").writeFile("./req.json", JSON.stringify(req), (err) => {
    // })
    // console.log("about-req2 ===> ", req.url, req.path);
    const path = req.path;
    const nameServer = "Name From Server";
    renderAndCache(app, req, res, "/about", { path, nameServer });
  });

  server.get(/\/user\/detail$/, (req, res) => {
    // require("fs").writeFile("./req.json", JSON.stringify(req), (err) => {
    // })
    console.log("custom url :: ", req.url, req.path);
    const path = req.path;
    const nameServer = "Name From Server";
    renderAndCache(app, req, res, "/detail", { path, nameServer });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
};
