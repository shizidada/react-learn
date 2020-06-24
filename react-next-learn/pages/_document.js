/*
 * @Author: Jiang.Jing
 * @Date: 2019-04-13 10:04:37
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 10:35:53
 */

import Document, { Head, Main, NextScript } from "next/document";

// normalize
import "normalize.css";

import "./global.less";

class MooseDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });
    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          ></meta>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.NVC_Opt = {
                //应用类型标识。它和使用场景标识（scene字段）一起决定了智能验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
                appkey: "CF_APP_1",
                //使用场景标识。它和应用类型标识（appkey字段）一起决定了智能验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
                scene: "nvc_register",
                //声明二次验证需要渲染的目标元素ID。
                renderTo: "#captcha",
                //业务键字段，可为空。该参数可用于上线前测试，请按照代码集成后测试部分中的方法配置该字段值。
                // , nvcCode: 800
                trans: { nvcCode: 200 },
              };
          `,
            }}
          ></script>
          <script src="//g.alicdn.com/sd/smartCaptcha/0.0.4/index.js"></script>
          <script src="//g.alicdn.com/sd/quizCaptcha/0.0.1/index.js"></script>
          <script src="//g.alicdn.com/sd/nvc/1.1.112/guide.js"></script>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </html>
    );
  }
}

export default MooseDocument;
