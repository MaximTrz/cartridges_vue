<template>
  <AppAddTable :title="title" :items="printers" :actionList="actionList">
    <template v-slot:tableHead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер принтера</th>
        <th scope="col">Модель</th>
        <th scope="col">Вид ремонта</th>
        <th scope="col"></th>
      </tr>
    </template>
  </AppAddTable>
</template>
<script>
import AppAddTable from "../components/AppAddTable.vue";
export default {
  name: "AppAddRepair",
  components: {
    AppAddTable,
  },
  data: function () {
    return {
      title: "Добавить ремонт принтера",
      printers: [
        { id: 1, name: "HP 1150", actions: [] },
        { id: 2, name: "HP 1150", actions: [] },
        { id: 2, name: "HP 2035", actions: [] },
      ],
      actionList: [
        { id: 1, name: "Техническое обслуживание" },
        { id: 2, name: "Замена термопленки" },
        { id: 3, name: "Резинового вала" },
      ],
    };
  },
};
</script>
