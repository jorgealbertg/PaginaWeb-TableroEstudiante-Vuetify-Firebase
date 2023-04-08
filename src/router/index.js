// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Materias from "../views/Materias.vue"

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
