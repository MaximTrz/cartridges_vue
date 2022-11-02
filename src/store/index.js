import { createStore } from "vuex";
import modals from "./modals";
import equipment from "./equipment";
import repairTypes from "./repairTypes";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { modals, equipment, repairTypes },
  strict: process.env.NODE_ENV !== "production",
});
