const { parse } = require('url');
const next = require('next');
const path = require('path');
const cacheableResponse = require('cacheable-response')
const express = require('express');
const port = parseInt(process.env.PORT, 10) || 8080;

const dev = process.env.NODE_ENV !== 'production';
console.log("current NODE_ENV ==> ", process.env.NODE_ENV);

const app = next({ dev });
const handle = app.getRequestHandler();

// https://github.com/zeit/next.js/blob/canary/examples/ssr-caching/server.js
const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams),
  }),
  send: ({ data, res }) => res.send(data),
})

app.prepare().then(() => {
  // Express
  const server = express();

  server.get(/\/about$/, (req, res) => {
    // require("fs").writeFile("./req.json", JSON.stringify(req), (err) => {
    // })
    // console.log("about-req2 ===> ", req.url, req.path);
    const path = req.path;
    const nameServer = "Name From Server";
    const queryParams = { path, nameServer }
    const pagePath = '/about'
    return ssrCache({ req, res, pagePath, queryParams })
  });

  server.get(/\/user\/detail$/, (req, res) => {
    // require("fs").writeFile("./req.json", JSON.stringify(req), (err) => {
    // })
    const path = req.path;
    const nameServer = "Name From Server";
    const queryParams = { path, nameServer }
    const pagePath = '/detail'
    return ssrCache({ req, res, pagePath, queryParams })
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  // Koa 
  // require('./routers/index2')(app, handle);
})