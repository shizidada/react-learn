const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
console.log("current NODE_ENV ==> ", process.env.NODE_ENV);

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Express
  require('./routers/index')(app, handle);

  // Koa 
  // require('./routers/index2')(app, handle);
})