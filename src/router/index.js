/*
 * @Author: your name
 * @Date: 2021-08-03 23:01:
 * @LastEditTime: 2021-08-04 22:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myproject/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 登录页
      path:"/",
      name:'Login',
      component:Login
    }
  ]
})
