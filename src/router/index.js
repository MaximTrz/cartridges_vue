import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import AppAddTable from "../components/AppAddTable.vue";
import Books from "../views/Books.vue";
import AppAddRefil from "../views/addRefil.vue";
import AppAddRepair from "../views/addRepair.vue";
import AppSendToService from "../views/sendToService.vue";
import AppBookSwitch from "../views/bookItemsLists/AppBookSwitch";
import AppBookCartridge from "../views/bookItem/AppBookCartridge.vue";
import AppBookPrinter from "../views/bookItem/AppBookPrinter";
import AppBookGroup from "../views/bookItem/AppBookGroup";
import AppRefill from "../views/AppRefill.vue";
import AppRepairs from "../views/AppRepairs";

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
    path: "/book-items-list/:bookname",
    name: "bookItemsList",
    component: AppBookSwitch,
  },

  {
    path: "/cartridge/:id",
    name: "cartridges",
    component: AppBookCartridge,
  },

  {
    path: "/printer/:id",
    name: "printers",
    component: AppBookPrinter,
  },

  {
    path: "/group/:id",
    name: "groups",
    component: AppBookGroup,
  },

  {
    path: "/repairs",
    name: "repairs",
    component: AppRepairs,
  },

  {
    path: "/refill",
    name: "refills",
    component: AppRefill,
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
