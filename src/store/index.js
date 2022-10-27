import { createStore } from "vuex";
import modals from "./modals";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { modals },
  strict: process.env.NODE_ENV !== "production",
});
