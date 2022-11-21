<template>
  <AppAddTable :title="title" :items="cartridgies" :actionList="actionList">
    <template v-slot:tableHead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер картриджа</th>
        <th scope="col">Модель</th>
        <th scope="col">Действие</th>
        <th scope="col"></th>
      </tr>
    </template>
  </AppAddTable>
</template>
<script>
import AppAddTable from "../components/AppAddTable.vue";
export default {
  name: "AppAddRefil",
  mounted: function () {
    this.cartridgies = this.cartridgesList;
  },
  components: {
    AppAddTable,
  },
  data: function () {
    return {
      title: "Добавить заправку",
      cartridgies: [],
      actionList: [
        { id: 1, name: "Заправка" },
        { id: 2, name: "Замена барабана" },
        { id: 3, name: "Замена ракеля" },
      ],
    };
  },
  computed: {
    cartridgesList: function () {
      return this.$store.getters["books/cartridgies"];
    },
  },
};
</script>
