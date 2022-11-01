import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import AppAddTable from "../components/AppAddTable.vue";
// eslint-disable-next-line no-unused-vars
import BooksList from "../views/Books-list.vue";
import Books from "../views/Books.vue";
import AppAddRefil from "../views/addRefil.vue";
import AppAddRepair from "../views/addRepair.vue";
import AppSendToService from "../views/sendToService.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },

  {
    path: "/add-table",
    name: "add",
    component: AppAddTable,
  },

  {
    path: "/add-refil",
    name: "addRefil",
    component: AppAddRefil,
  },

  {
    path: "/add-printer-repair",
    name: "addPrinterRepair",
    component: AppAddRepair,
  },

  {
    path: "/send-to-servie",
    name: "sendToService",
    component: AppSendToService,
  },

  {
    path: "/books",
    name: "books",
    component: Books,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AppAddTable.vue"),
  },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(),
  routes,
});

export default router;
