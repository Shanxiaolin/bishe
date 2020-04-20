import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgetPwd from '@/components/ForgetPwd'
import UpdatePwd from '@/components/UpdatePwd'
import Student from '@/components/Student'
import Teacher from '@/components/Teacher'
import Admin from '@/components/Admin'

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
      path: '/updatepwd',
      component: UpdatePwd
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
      component: Admin
    }
  ]
})
