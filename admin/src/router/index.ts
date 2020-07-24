import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/main.vue'
import courseCrud from '../views/courses/courseCrud.vue'
// import courseListEdit from '../views/courses/courseListEdit.vue'
// import courseListCreate from '../views/courses/courseListCreate.vue'


Vue.use(VueRouter)

  const routes:RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children:[
        {
            name:'home',
            path:'/',
            component:Home
        },
        {
            name:'courses-crud',
            path:'/:resource/list',
            component:courseCrud,
            props:true
        }
        // {
        //     name:'courses-list',
        //     path:'/courses/list',
        //     component:courseList
        // },
        // {
        //     name:'courses-listEdit',
        //     path:'/courses/listEdit/:id',
        //     component:courseListEdit,
        //     props:true
        // },
        
        // {
        //     name:'courses-listCreate',
        //     path:'/courses/listCreate',
        //     component:courseListEdit
        // }
    ]
  }
 
]

const router = new VueRouter({
  routes
})

export default router
