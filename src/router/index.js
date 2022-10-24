import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import AddTable from "../views/AddTable.vue";
import BooksList from "../views/Books-list.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },

  {
    path: "/add-table",
    name: "add",
    component: AddTable,
  },

  {
    path: "/books-list",
    name: "books",
    component: BooksList,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddTable.vue"),
  },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(),
  routes,
});

export default router;
