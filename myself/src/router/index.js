import Vue from 'vue'
import Router from 'vue-router'
import heade from '@/components/heade'
import Hello from '@/components/Hello'
import info from '@/components/info'
import more from '@/components/more'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
//   mode: 'history',
    routes: [
        {
          path: '/',
          name: 'Hello',
          component: Hello
        },
        {
          path: '/heade',
          name: 'heade',
          component: heade,
          redirect: '/heade/info',
            children:[
                {
                  path: '/heade/info',
                  name: 'info',
                  component: info
                },
                {
                  path: '/heade/more',
                  name: 'more',
                  component: more
                } 
            ]
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        
    ]
})
