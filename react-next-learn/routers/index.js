/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 14:31:18 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:50
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

  // /Generalize/GeneralizeCat/cat
  // /\/Generalize\/GeneralizeCat\/cat\/\d+$/
  server.get(/\/Generalize\/GeneralizeCat\/cat\/\d+$/, (req, res) => {
    // require("fs").writeFile("./req.json", JSON.stringify(req), (err) => {
    // })
    const articleId = req.path.match(/\d+/)[0];
    console.log("Generalize-req2 ===> ", req.url, req.path, articleId);
    const path = req.path;
    const nameServer = "Name From Server";
    renderAndCache(app, req, res, "/generalize", { path, nameServer, articleId });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
};
