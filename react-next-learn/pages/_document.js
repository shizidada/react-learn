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
        enhanceApp: App => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: Component => Component
      });
    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MooseDocument;
