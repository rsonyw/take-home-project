import { createRouter, createWebHistory } from 'vue-router'
import MeetingRoom from '../views/MeetingRoom.vue'
import PesanRuangan from '../views/PesanRuangan.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MeetingRoom',
      component: MeetingRoom
    },
    {
      path: '/pesan-ruangan',
      name: 'PesanRuangan',
      component: PesanRuangan
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

export default router
