import { createStore } from "vuex";
import modals from "./modals";
import books from "./books";
import repairTypes from "./repairTypes";
import ApiService from "@/api-service";

export default createStore({
  state: {
    apiService: new ApiService(),
  },
  getters: {
    apiService: function (state) {
      return state.apiService;
    },
  },
  mutations: {},
  actions: {},
  modules: { modals, books, repairTypes },
  strict: process.env.NODE_ENV !== "production",
});
