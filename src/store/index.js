import { createStore } from "vuex";
import modals from "./modals";
import books from "./books";
import repairTypes from "./repairTypes";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { modals, books, repairTypes },
  strict: process.env.NODE_ENV !== "production",
});
