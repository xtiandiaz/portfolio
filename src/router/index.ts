import { createRouter, createWebHistory } from 'vue-router'
import { PortfolioView, ProjectView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: PortfolioView,
      },
      children: [
        {
          path: 'project/:id',
          components: {
            modal: ProjectView,
          },
          props: true,
        },
      ],
    },
  ],
})

export default router
