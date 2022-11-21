import { createStore } from "vuex";
import modals from "./modals";
import books from "./books";
import repairTypes from "./repairTypes";
import ApiService from "@/api-service";

const apiService = new ApiService();

export default createStore({
  state: {
    apiService,
  },
  getters: {
    apiService: (state) => state.apiService,
  },
  mutations: {},
  actions: {},
  modules: { modals, books, repairTypes },
  strict: process.env.NODE_ENV !== "production",
});
