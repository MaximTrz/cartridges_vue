export default {
  namespaced: true,
  state: {
    printers: [
      { id: 1, name: "HP 2035" },
      { id: 2, name: "HP 1160" },
      { id: 3, name: "HP 1150" },
      { id: 4, name: "HP 6530" },
    ],
    cartridges: [],
    groups: [
      { id: 1, name: "Операционно-кассовый" },
      { id: 2, name: "Бюджетный" },
      { id: 3, name: "Контрольно-ревизионный" },
      { id: 4, name: "Отдел информационных технологий" },
    ],
  },
  mutations: {
    setCartridges(state, cartridges) {
      state.cartridges = cartridges;
    },
    updateCartridge(state, cartridge) {
      const item = this.state.cartridges.find(
        (element) => (element.id = cartridge.id)
      );
      const idx = this.state.cartridges.indexOff(item);
      this.state.cartridge[idx] = cartridge;
    },
    addCartridge(state, cartridge) {
      state.cartridges.push(cartridge);
    },
  },
  getters: {
    printers: (state) => state.printers,
    cartridges: (state) => state.cartridges,
    groups: (state) => state.groups,
    findItemById: (state) => (bookName, id) => {
      return state[bookName].find((elem) => elem.id == id);
    },
  },
  actions: {
    async loadCartridges() {
      const cartridges = await this.state.apiService.getAllСartridges();
      this.commit("books/setCartridges", cartridges);
      // eslint-disable-next-line no-unused-vars
    },
    async insertCartridge(context, name) {
      let res = await this.state.apiService.saveCartridge(null, {
        name,
      });
      if (res.result) {
        this.commit("books/addCartridge", { id: res.id, name });
      }
    },
    async updateCartridge(context, data) {
      let res = await this.state.apiService.saveCartridge(data.id, {
        name: data.name,
      });
      console.log(res);
    },
  },
};
