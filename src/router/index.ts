import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import VideoList from '@/components/VedioList.vue';
import VideoWatch from '@/components/VedioWatch.vue';
import SignUp from '@/components/auth/SignUp.vue';
import UserLogin from '@/components/auth/User-Login.vue';
import UserHome from '@/components/auth/User-Home.vue';
import GoogleSignIn from '@/components/auth/GoogleSignIn.vue';
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/home',
    name:'authentication',
    component: UserHome,
    meta: {requiresAuth:true }
  },
  {
    path: '/signup',
    name:'signup',
    component: SignUp
  },
  {
    path: '/login',
    name:'login',
    component: UserLogin
  },
  {
    path: '/',
    name: 'home',
    component: VideoList
  },
  {
    path: '/watch/:id',
    name: 'watch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:VideoWatch
  },
  {
    path: '/googlesignIn',
    name: 'google Sign In',
    component: GoogleSignIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
