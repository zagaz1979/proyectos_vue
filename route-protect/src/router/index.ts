import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requireAuth: false
    }

  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false
    }

  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth: true,
      //role: 'admin'
    }

  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  
  // to: hacia donde quiere ir
  // from: de donde viene
  // next: hacia donde va a ir 

  /*
  //Vuex
  const auth = store.jwt != null
  
  // Firebase
  const auth = getAuth().currentUser != null

  //cookies
  const auth = $cookie.get('jwt') != null

  //session
  const auth = $session.get('jwt') != null
  */

  const auth = false
  const needAuth = to.meta.requireAuth

  if (needAuth && !auth){
    next('login')
  }else{
    next()
  }

})

export default router
