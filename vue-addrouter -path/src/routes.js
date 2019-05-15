


const routes = [     //这里写共同路由  不需要权限的路由
  {
    path: "/",
    component: () => import('./views/index.vue'),
    meta: {
      requireAuth: true,
    },
    children: [{
      path: "/",
      component: () => import('./views/indexpage.vue'),
      meta: {
        requireAuth: true,
      }
    }, ]
  }, {
    path: "/login",
    component: () => import('./views/login.vue'),

  }

]


const asyncRoutes = [{       //这里按角色份路由权限
    path: "/",
    component: () => import('./views/index.vue'),  //这里用动态加载路由 按需加载  这样没有权限的路由就不用加载
    meta: {
      requireAuth: true,
      roles: ['page1']  // 区分权限  这是账号A
    },
    children: [{
        path: "/",
        component: () => import('./views/indexpage.vue'),
        name:'首页',
        meta: {
          requireAuth: true,
        }
      },
      {
        path: "/page1",
        component: () => import('./components/page1/page1.vue'),
        name:'账号A 1页面',
        meta: {
          requireAuth: true,
        }
      },
      {
        path: "/page11",
        component: () => import('./components/page1/page11.vue'),
        name:'账号A 2页面',
        meta: {
          requireAuth: true,
        }
      }, 
      {
        path: "/page111",
        component: () => import('./components/page1/page111.vue'),
        name:'账号A 3页面',
        meta: {
          requireAuth: true,
        }
      }, 
    ]
  },

  {
    path: "/",
    component: () => import('./views/index.vue'),
    meta: {
      requireAuth: true,
      roles: ['page2']  // 这里是账号B 
    },
    children: [{
        path: "/",
        component: () => import('./views/indexpage.vue'),
        name:'首页',
        meta: {
          requireAuth: true,
        }
      },
      {
        path: "/page2",
        component: () => import('./components/page2/page2.vue'),
        name:'账号B 1页面',
        meta: {
          requireAuth: true,
        }
      },
      {
        path: "/page22",
        component: () => import('./components/page2/page22.vue'),
        name:'账号B 2页面',
        meta: {
          requireAuth: true,
        }
      }, 
      {
        path: "/page222",
        component: () => import('./components/page2/page222.vue'),
        name:'账号B 3页面',
        meta: {
          requireAuth: true,
        }
      }, 
    ]
  
  }

]


export {
  routes,
  asyncRoutes
}