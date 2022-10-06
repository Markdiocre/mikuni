import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"
const companyProfile = () => import("../views/CompanyProfile.vue")
const companyHistory = () => import("../views/History.vue")
const mvq = () => import("../views/MVQ.vue")
const contact = () => import("../views/Contact.vue")
const PaS = () => import("../views/PaS.vue")
const Rti = () => import("../views/rtiPaS.vue")
const RtiMVQ = () => import("../views/rtiMVQ.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "mikuniHome" }
    },
    {
      path: "/home",
      name: "mikuniHome",
      component: Home
    },
    {
      path: "/company_profile",
      name: "mikuniCompanyProfile",
      component: companyProfile
    },
    {
      path: "/history",
      name: "mikuniHistory",
      component: companyHistory
    },
    {
      path: "/mvq",
      name: "mikuniMvq",
      component: mvq
    },
    {
      path: "/contact",
      name: "mikuniContact",
      component: contact
    },
    {
      path: "/product_and_services",
      name: "mikuniPaS",
      component: PaS
    },
    {
      path: "/rti/Product_and_services",
      name: "mikuniRTI",
      component: Rti
    },
    {
      path: "/rti/MVQ",
      name: "RtiMVQ",
      component: RtiMVQ
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

export default router;
