import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/mikuni/Home.vue"
const companyProfile = () => import("../views/mikuni/CompanyProfile.vue")
const companyHistory = () => import("../views/mikuni/History.vue")
const mvq = () => import("../views/mikuni/MVQ.vue")
const contact = () => import("../views/mikuni/Contact.vue")
const PaS = () => import("../views/mikuni/PaS.vue")

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
    },
    {
      path: "/mikuni/mvq",
      name: "mikuniMvq",
      component: mvq
    },
    {
      path: "/mikuni/contact",
      name: "mikuniContact",
      component: contact
    },
    {
      path: "/mikuni/product_and_services",
      name: "mikuniPaS",
      component: PaS
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

export default router;
