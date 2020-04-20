import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgetPwd from '@/components/ForgetPwd'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path:'/pwd',
      component:ForgetPwd,
      beforeEnter:(to,from,next)=>{
        console.log(from.path=='/')
        console.log(to)
         if(from.path!='/'){
         this.$router.push('/')
         }
         else 
         next()
      }
    }
  ]
})
