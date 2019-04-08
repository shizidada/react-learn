import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 按路由拆分代码
import Loadable from 'react-loadable';

import Loading from "./components/common/Loading";

const LoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <Loading/>;
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};

const AsyncBlog = Loadable({
    loader: () => import('./components/blog/index'),
    loading: LoadingComponent
});
const AsyncIndex = Loadable({
    loader: () => import('./components/index/index'),
    loading: LoadingComponent
});
const AsyncPortfolio = Loadable({
    loader: () => import('./components/portfolio/index'),
    loading: LoadingComponent
});
const AsyncAbout = Loadable({
    loader: () => import('./components/about/index'),
    loading: LoadingComponent
});
const AsyncContact = Loadable({
    loader: () => import('./components/contact/index'),
    loading: LoadingComponent
});
const AsyncCategoryDetail = Loadable({
    loader: () => import('./components/detail/CategoryDetail'),
    loading: LoadingComponent
});
const AsyncBlogDetail = Loadable({
    loader: () => import('./components/detail/BlogDetail'),
    loading: LoadingComponent
});

////////////////////////////////////////
const AsyncAdmin = Loadable({
    loader: () => import('./components/admin/index'),
    loading: LoadingComponent
});

const AsyncManager = Loadable({
    loader: () => import('./components/admin/manager/index'),
    loading: LoadingComponent
});

// 路由配置
class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={AsyncIndex} />
                    <Route path="/blog" component={AsyncBlog} />
                    <Route path="/portfolio" component={AsyncPortfolio} />
                    <Route path="/about" component={AsyncAbout} />
                    <Route path="/contact" component={AsyncContact} />
                    <Route path="/category_detail/:categoryId" component={AsyncCategoryDetail}/>
                    <Route path="/blog_detail/:blogId" component={AsyncBlogDetail}/>
                    <Route path="/admin" component={AsyncAdmin}/>
                    <Route path="/manager" component={AsyncManager}/>
                </Switch>
            </Router>
        );
    }
}

export default Routers;