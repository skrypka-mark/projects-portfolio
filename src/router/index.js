import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '@/pages/portfolio';
import About from '@/pages/about';
import Project from '@/pages/project';
import NotFound from '@/pages/not-found';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'portfolio' },
      children: [
        {
          path: '/portfolio',
          name: 'portfolio',
          component: Portfolio
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/project/:id',
          name: 'project',
          component: Project
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
