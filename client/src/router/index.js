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
import AllLab from '@/components/AllLab'
import BookLab from '@/components/BookeLab'
import Work from '@/components/Work'
import SearchALLmark from '@/components/SearchALLmark'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Login
    },
    {
      path: '/forgetpwd',
      component: ForgetPwd,
    },
    {
      path: '/student',
      component: Student,
      meta: {
        requireAuth:true, // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [{
          path: '/student/upwork',
          component: Upwork
        },
        {
          path: '/student/updatepwd',
          component: UpdatePwd
        },
        {
          path: '/student/searchmark',
          component: SearchMark
        },
        {
          path: '/student/searchlab',
          component: SearchLab
        },

      ]
    },
    {
      path: '/teacher',
      component: Teacher,
      meta: {
        requireAuth:true, // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [{
          path: '/teacher/updatepwd',
          component: UpdatePwd
        },
        {
          path: '/teacher/alllab',
          component: AllLab
        },
        {
          path: '/teacher/booklab',
          component: BookLab
        },
        {
          path: '/teacher/work',
          component: Work
        },
        {
          path: '/teacher/searchallmark',
          component: SearchALLmark
        },
      ]
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
