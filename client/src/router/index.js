import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/User/Register'
import Login from '@/components/User/Login'
import TestControllers from '@/components/Admin/TestControllers'
import AllUsers from '@/components/Admin/AllUsers'
import AllAdmins from '@/components/Admin/AllAdmins'
import UserDetails from '@/components/User/UserDetails'
import EditUser from '@/components/User/EditUser'
import AddAdministrator from '@/components/Admin/AddAdministrator'
import NewLine from '@/components/Line/NewLine'
import AllLines from '@/components/Line/AllLines'
import UserEditAccount from '@/components/User/UserEditAccount'
import ResetPassword from '@/components/User/ResetPassword'
import RemoveAccount from '@/components/User/RemoveAccount'
import MyTickets from '@/components/Ticket/MyTickets'
import BuyTicket from '@/components/Ticket/BuyTicket'
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
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'TestControllers',
      component: TestControllers
    },
    {
      path: '/allUsers',
      name: 'AllUsers',
      component: AllUsers
    },
    {
      path: '/allAdmins',
      name: 'AllAdmins',
      component: AllAdmins
    },
    {
      path: '/user/details/:id',
      name: 'UserDetails',
      component: UserDetails
    },
    {
      path: '/user/details/edit/:id',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/add/admin',
      name: 'AddAdministrator',
      component: AddAdministrator
    },
    {
      path: '/line/new',
      name: 'NewLine',
      component: NewLine
    },
    {
      path: '/line/all',
      name: 'AllLines',
      component: AllLines
    },
    {
      path: '/edit/mydata',
      name: 'UserEditAccount',
      component: UserEditAccount
    },
    {
      path: '/reset/password/',
      name: 'ResetPassword',
      component: ResetPassword    
    },
    {
      path: '/remove/account',
      name: 'RemoveAccount',
      component: RemoveAccount
    },
    {
      path: '/ticket/buy',
      name: 'ButTicket',
      component: BuyTicket    
    },
    {
      path: '/mytickets/',
      name: 'MyTickets',
      component: MyTickets    
    },

  ]
})
