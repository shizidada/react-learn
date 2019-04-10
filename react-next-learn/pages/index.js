import Head from 'next/head';
import Link from 'next/link';

import React, { Component } from 'react';

class Index extends Component {

    /**
     * 当服务渲染时，getInitialProps将会把数据序列化，
     * 就像JSON.stringify。所以确保getInitialProps返回的是一个普通 JS 对象，
     * 而不是Date, Map 或 Set类型。
     * 当页面初始化加载时，getInitialProps只会加载在服务端。
     * 只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行getInitialProps。
     */
    // getInitialProps将不能使用在子组件中。只能使用在pages页面中。
    /**
      * 
      *   getInitialProps入参对象的属性如下：
      *   pathname - URL 的 path 部分
      *   query - URL 的 query 部分，并被解析成对象
      *   asPath - 显示在浏览器中的实际路径（包含查询部分），为String类型
      *   req - HTTP 请求对象 (只有服务器端有)
      *   res - HTTP 返回对象 (只有服务器端有)
      *   jsonPageRes - 获取数据响应对象 (只有客户端有)
      *   err - 渲染过程中的任何错误
     */
    static async getInitialProps(params) {
        console.log(params);
        const { req } = params;
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent };
    }

    componentDidMount() {
        // console.log(this.props);

    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Next Learn</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                Welcome to next.js!

                <div>
                    Click{' '}<Link href={{ pathname: '/about', query: { name: 'shizi' } }}><a>here</a></Link>{' '} to read more


                </div>
            </div>
        )
    }

}

export default Index;

// export default () => <div>
//     <Head>
//       <title>React Next Learn</title>
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//     </Head>
//     Welcome to next.js!
// </div>