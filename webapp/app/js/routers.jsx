import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Index from "./components/index/index";
import Blog from "./components/blog/index";
import Portfolio from "./components/portfolio/index";
import About from "./components/about/index";
import Contact from "./components/contact/index";
import BlogDetail from "./components/detail/BlogDetail";
import CategoryDetail from "./components/detail/CategoryDetail";

////////////////////////////////////////
import Admin from "./components/admin/index";
import Manager from "./components/admin/manager/index";

// 路由配置
class Routers extends React.Component {

        render() {
            return (
                <Router>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/category_detail/:categoryId" component={CategoryDetail}/>
                        <Route path="/blog_detail/:blogId" component={BlogDetail}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/manager" component={Manager}/>
                    </Switch>
                </Router>
        );
    }
}

export default Routers;