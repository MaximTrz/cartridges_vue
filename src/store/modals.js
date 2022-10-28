export default {
  namespaced: true,
  state: {
    modalsVisible: {
      setCartridgeVisible: false,
      toAcceptCartridgeVisible: false,
    },
  },
  getters: {
    setCartridgeVisible: (state) => state.modalsVisible.setCartridgeVisible,

    toAcceptCartridgeVisible: (state) =>
      state.modalsVisible.toAcceptCartridgeVisible,
  },
  mutations: {
    closeAllModals(state) {
      for (const key in state.modalsVisible) {
        state.modalsVisible[key] = false;
      }
    },
    showModal(state, id) {
      state.modalsVisible[id] = true;
    },
  },
  actions: {
    showModal({ commit }, id) {
      commit("closeAllModals");
      commit("showModal", id);
    },
    closeAllModals({ commit }) {
      commit("closeAllModals");
    },
  },
};
