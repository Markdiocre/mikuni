import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/mikuni/Home.vue"
const companyProfile = () => import("../views/mikuni/CompanyProfile.vue")
const companyHistory = () => import("../views/mikuni/History.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: {name: "mikuniHome"}
    },
    {
      path: "/mikuni/home",
      name: "mikuniHome",
      component: Home
    },
    {
      path: "/mikuni/company_profile",
      name: "mikuniCompanyProfile",
      component: companyProfile
    },
    {
      path: "/mikuni/history",
      name: "mikuniHistory",
      component: companyHistory
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

export default router;
