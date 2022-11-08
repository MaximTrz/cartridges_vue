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
    groups: [
      { id: 1, name: "Операционно-кассовый" },
      { id: 2, name: "Бюджетный" },
      { id: 3, name: "Контрольно-ревизионный" },
      { id: 4, name: "Отдел информационных технологий" },
    ],
  },
  getters: {
    printers: (state) => state.printers,
    cartridgies: (state) => state.cartridgies,
    groups: (state) => state.groups,
    findItemById: (state) => (bookName, id) => {
      return state[bookName].find((elem) => elem.id == id);
    },
  },
};
