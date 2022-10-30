<template>
  <AppAddTable title="Добавить" :items="cartridgies" :actionList="actionList">
    <template slot:tableHead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер картриджа</th>
        <th scope="col">Модель</th>
        <th scope="col">Ремонт</th>
        <th scope="col"></th>
      </tr>
    </template>
  </AppAddTable>
</template>
<script>
import AppAddTable from "../components/AppAddTable.vue";
export default {
  name: "AppAddRefil",
  components: {
    AppAddTable,
  },
  data: function () {
    return {
      title: "Добавить заправку",
      cartridgies: [
        { id: 1, name: "Cactus 505", actions: [] },
        { id: 2, name: "HP 48x", actions: [] },
      ],
      actionList: [
        { id: 1, name: "Заправка" },
        { id: 2, name: "Замена барабана" },
        { id: 3, name: "Замена ракеля" },
      ],
    };
  },
};
</script>
