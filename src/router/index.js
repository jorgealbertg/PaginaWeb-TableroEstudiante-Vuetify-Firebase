// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home-View.vue"
import Materias from "../views/Materias-View.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/materias",
    name: "Materias",
    component: Materias
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
