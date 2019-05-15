import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)

import {
  routes,
  asyncRoutes
} from './routes'

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  var user = sessionStorage.getItem('user')  //这个判断token 我没有token 先用 user 代替
  var user = sessionStorage.getItem('user')  // 获取账号权限 用户角色
  if (to.path=='/login') {   // 如果进的是登录页面  就直接进去 
    next()  // 这一步非常重要   没有这一步就会在  登录页死循环
  } else { 
    if (user) {     //判断是否登录
      if (user) {   //判断是否需要权限
        if (store.state.addRoutes.length <= 0) {  //判断是否刷新了页面
        
          const newRoutes = asyncRoutes.filter(route => route.meta.roles.includes(user))  //从asyncRoutes 获取 当前账号的路由权限
          // 提交给mutation asyncRoutes 
          router.addRoutes(newRoutes)  // 动态的加载 newRoutes 路由权限

          store.commit('setAddRoutes', newRoutes)  // 吧路由权限存一份 方便判断用户是否刷新了页面
          next(to.fullPath)  // 用户刷新了页面 在跳回去
        }
        next()

      } else {
        next('/login')
      }

    } else {
      next('/login')  // 没有登录 返回登录页面
    }
  }
})








export default router