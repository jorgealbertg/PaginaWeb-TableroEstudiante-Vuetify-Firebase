// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home-View.vue"
import Materias from "../views/Materias-View.vue"
import Login from "../views/Login-View.vue"
import Register from "../views/Register-View.vue"

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
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
