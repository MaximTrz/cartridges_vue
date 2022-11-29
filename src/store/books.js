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
      const item = state.cartridges.find(
        (element) => element.id == cartridge.id
      );
      const idx = state.cartridges.indexOf(item);
      if (idx >= 0) {
        state.cartridges[idx].name = cartridge.name;
      }
    },
    addCartridge(state, cartridge) {
      state.cartridges.push(cartridge);
    },
    deleteCartridge(state, id) {
      const newCartridges = state.cartridges.filter((item) => item.id != id);
      state.cartridges = newCartridges;
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
    },
    async insertCartridges(context, name) {
      let res = await this.state.apiService.saveCartridge(null, {
        name,
      });
      if (res.result) {
        this.commit("books/addCartridge", { id: res.id, name });
      }
    },
    async updateCartridge(context, data) {
      const cartridge = { id: `${data.id}`, name: data.name };
      let res = await this.state.apiService.saveCartridge(data.id, cartridge);
      if (res.result) {
        context.commit("updateCartridge", cartridge);
      }
    },
    async deleteCartridge(context, id) {
      let res = await this.state.apiService.deleteCartridge(id);
      if (res.result) {
        context.commit("deleteCartridge", id);
      }
    },
  },
};
