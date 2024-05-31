import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import Login from '@/views/login.vue'
import Admin from '@/views/admin.vue'
import Student from '@/views/student.vue'
import Jadval from '@/views/jadval.vue'
import Rejalar from '@/views/rejalar.vue'
import Moliya from '@/views/moliya.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true }
  },
  {
    path: '/student',
    name: 'student',
    component: Student,
    meta: { requiresAuth: true }
  },
  {
    path: '/moliya',
    name: 'moliya',
    component: Moliya,
    meta: { requiresAuth: true }
  },
  {
    path: '/jadval',
    name: 'jadval',
    component: Jadval,
    meta: { requiresAuth: true }
  },
  {
    path: '/rejalar',
    name: 'rejalar',
    component: Rejalar,
    meta: { requiresAuth: true }
  },
  {
    path: '/groups',
    name: 'groups',
    component: About,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
