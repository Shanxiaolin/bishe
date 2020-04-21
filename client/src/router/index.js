import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import ForgetPwd from '@/views/ForgetPwd'
import UpdatePwd from '@/components/UpdatePwd'
import Student from '@/views/Student'
import Teacher from '@/views/Teacher'
import Admin from '@/views/Admin'
import Token from '@/components/Token'
import Test from '@/components/Test'

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
      component: Student
    },
    {
      path: '/teacher',
      component: Teacher
    },
    {
      path: '/admin',
      component: Admin,
      children:[
        {
          path: '/test',
          component: Test
        },
        {
          path: '/updatepwd',
          component: UpdatePwd
        },
      ]
    },
    {
      path: '/token',
      component: Token
    }
  ]
})
