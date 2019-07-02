import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '../components/Register'
import Login from '../components/Login'
import Search from '../components/Search'
import UserHome from '../components/UserHome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'registration',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search/line',
      name: 'searchLine',
      component: Search
    },
    {
      path: '/user/home',
      name: 'home',
      component: UserHome
    }
  ]
})
