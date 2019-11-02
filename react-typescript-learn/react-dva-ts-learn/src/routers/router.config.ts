export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      // user
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          { path: '/user/login', name: 'login', component: './User/Login' },
          { path: '/user/register', name: 'register', component: './User/Register' },
        ],
      },
      // app
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          // dashboard
          {
            path: '/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                path: '/dashboard/analysis',
                name: 'analysis',
                component: './Dashboard/Analysis',
              },
              {
                path: '/dashboard/monitor',
                name: 'monitor',
                component: './Dashboard/Monitor',
              },
              {
                path: '/dashboard/workplace',
                name: 'workplace',
                component: './Dashboard/Workplace',
              },
            ],
          },
          // list
          {
            path: '/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/list/table-list',
                name: 'searchtable',
                component: './list/Tablelist',
              },
              {
                path: '/list/basic-list',
                name: 'basiclist',
                component: './list/Basiclist',
              },
              {
                path: '/list/card-list',
                name: 'cardlist',
                component: './list/Cardlist',
              },
              {
                path: '/list/search',
                name: 'search-list',
                component: './list/search',
                routes: [
                  {
                    path: '/list/search/articles',
                    name: 'articles',
                    component: './list/Articles',
                  },
                  {
                    path: '/list/search/projects',
                    name: 'projects',
                    component: './list/Projects',
                  },
                  {
                    path: '/list/search/applications',
                    name: 'applications',
                    component: './list/Applications',
                  },
                  {
                    path: '/list/search',
                    redirect: '/list/search/articles',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
