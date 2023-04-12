import { createRouter, createWebHistory } from 'vue-router';
import PortfolioPage from '@/pages/portfolio';
import AboutPage from '@/pages/about';
import ProjectPage from '@/pages/project';

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
          component: PortfolioPage
        },
        {
          path: '/about',
          name: 'about',
          component: AboutPage
        },
        {
          path: '/project',
          name: 'project',
          component: ProjectPage
        },
      ]
    },
  ]
})

export default router
