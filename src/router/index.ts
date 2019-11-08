import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoadingBar } from 'view-design'
import routes from './routes'

Vue.component('LoadingBar', LoadingBar)

Vue.use(VueRouter)

// 白名单
const whiteList = ['/', '/home', '/share', '/photograph', '/register']

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* 路由之前检查token */
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  let token = '123'
  // 白名单直接放行
  if (whiteList.includes(to.fullPath)) {
    next()
  } else if (
    to.fullPath.startsWith('/article') ||
    to.fullPath.startsWith('/photograph')
  ) {
    // 路由包含/article，即文章详情页，或者包换/photograph，即图片记录，放行
    next()
  } else if (token == null && to.fullPath !== '/login') {
    // 路由不是登录，且没有拿到token，直接拦截，跳转至登录页
    next({
      name: 'login'
    })
  } else {
    // 拿到token，或者路由是login，直接放行
    next()
  }
})

/* 路由之后关闭进度条 */
router.afterEach(() => {
  LoadingBar.finish()
})

export default router