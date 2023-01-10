import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: function () {
      return import('../views/ResumeView.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import('../views/ProjectsView.vue')
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: function () {
      return import('../views/TestimonialsView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
