export default {
  namespaced: true,
  state: {
    cartridgeRepairTypes: [
      { id: 1, name: "Заправка" },
      { id: 2, name: "Замена барабана" },
      { id: 3, name: "Замена ракеля" },
    ],
    printerRepairTypes: [
      { id: 1, name: "Техническое обслуживание" },
      { id: 2, name: "Замена термопленки" },
      { id: 3, name: "Резинового вала" },
    ],
  },
  getters: {
    cartridgeRepairTypes: (state) => state.cartridgeRepairTypes,
    printerRepairTypes: (state) => state.printerRepairTypes,
  },
};
