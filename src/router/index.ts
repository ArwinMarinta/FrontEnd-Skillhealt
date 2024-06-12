import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Login from "../pages/login/Login.vue";
import Hospital from "../pages/hospital/Hospital.vue";
import Doctor from "../pages/doctor/Doctor.vue";
import "../style.css";
// import Register from "@/pages/register/Register.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/hospital",
    component: Hospital,
  },
  {
    path: "/doctor",
    component: Doctor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
