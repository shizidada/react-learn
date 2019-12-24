/*
 * @Author: Jiang.Jing
 * @Date: 2019-04-13 10:04:37
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 10:35:53
 */

import Document, { Head, Main, NextScript } from "next/document";

export default class LearnDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
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
