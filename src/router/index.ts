import { createRouter, createWebHistory } from 'vue-router'
import { MainView, ProjectView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: MainView,
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
