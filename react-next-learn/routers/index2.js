/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-13 14:29:27 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:53
 * Koa 作为服务
 */
const Koa = require("koa");
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 8080;

const server = new Koa();
const router = new Router();

module.exports = (app, handle) => {

  router.get(/\/about$/, async ctx => {
    // console.log("about ===> ", ctx);
    // console.log(" ###################################################### ");
    // require("fs").writeFile("./ctx.json", JSON.stringify(ctx), (err) => {
    // })
    console.log("ctx.query", ctx.query);
    const nameServer = "Name From Server";
    // render (req, res, pathname, query, opts)
    await app.render(ctx.req, ctx.res, '/about', { ...ctx.query, nameServer })
    ctx.respond = false
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    // 为了绕过 Koa 的内置 response 处理，你可以显式设置 ctx.respond = false;。
    // 如果您想要写入原始的 res 对象而不是让 Koa 处理你的 response，请使用此参数。
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
};