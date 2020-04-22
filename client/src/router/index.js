import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import ForgetPwd from '@/views/ForgetPwd'
import UpdatePwd from '@/components/UpdatePwd'
import Student from '@/views/Student'
import Teacher from '@/views/Teacher'
import Admin from '@/views/Admin'
import Token from '@/components/Token'
import Upwork from '@/components/Upwork'
import SearchMark from '@/components/SearchMark'
import SearchLab from '@/components/SearchLab'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path:'/forgetpwd',
      component:ForgetPwd,
    },
    {
      path: '/student',
      component: Student,
      children:[
        {
          path: '/upwork',
          component: Upwork
        },
        {
          path: '/updatepwd',
          component: UpdatePwd
        },
        {
          path: '/searchmark',
          component: SearchMark
        },
        {
          path: '/searchlab',
          component: SearchLab
        },
      ]
    },
    {
      path: '/teacher',
      component: Teacher
    },
    {
      path: '/admin',
      component: Admin,
    },
    {
      path: '/token',
      component: Token
    }
  ]
})
