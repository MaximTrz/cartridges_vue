export default {
  namespaced: true,
  state: {
    printers: [
      { id: 1, name: "HP 2035" },
      { id: 2, name: "HP 1160" },
      { id: 3, name: "HP 1150" },
      { id: 4, name: "HP 6530" },
    ],
    cartridgies: [
      { id: 1, name: "Cactus 505", status: "1" },
      { id: 2, name: "Canon 055", status: "1" },
      { id: 3, name: "HP 48x", status: "1" },
      { id: 4, name: "HP 67n", status: "1" },
    ],
  },
  getters: {
    priners: (state) => state.priners,
    cartridgies: (state) => state.cartridgies,
  },
};
