export default {
  namespaced: true,
  state: {
    printers: [
      { id: 1, name: "HP 2035" },
      { id: 2, name: "HP 1160" },
      { id: 3, name: "HP 1150" },
      { id: 4, name: "HP 6530" },
    ],
    cartridgies: [],
    groups: [
      { id: 1, name: "Операционно-кассовый" },
      { id: 2, name: "Бюджетный" },
      { id: 3, name: "Контрольно-ревизионный" },
      { id: 4, name: "Отдел информационных технологий" },
    ],
  },
  mutations: {
    setCartridges(state, cartridges) {
      state.cartridgies = cartridges;
    },
  },
  getters: {
    printers: (state) => state.printers,
    cartridgies: (state) => state.cartridgies,
    groups: (state) => state.groups,
    findItemById: (state) => (bookName, id) => {
      return state[bookName].find((elem) => elem.id == id);
    },
  },
  actions: {
    async loadCartridges() {
      const cartridges = await this.state.apiService.getAllСartridges();
      this.commit("books/setCartridges", cartridges);
    },
  },
};
