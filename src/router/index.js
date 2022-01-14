/*
 * @Author: Dzl
 * @Date: 2022-01-08 15:52:54
 * @LastEditTime: 2022-01-08 16:04:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-course\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ChatView from '../views/ChatView.vue'
import ReserveView from '../views/ReserveView.vue'
import UserInfo from '../views/UserInfo.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/ChatView',
    name: 'ChatView',
    component: ChatView
  },
  {
    path: '/ReserveView',
    name: 'ReserveView',
    component: ReserveView
  },
  {
    path:'/UserInfo',
    name:'UserInfo',
    component: UserInfo
    }
  ]
})

export default router
