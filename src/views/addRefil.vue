<template>
  <AppAddTable
    :title="title"
    :items="cartridgies"
    :actionList="cartridgies"
  ></AppAddTable>
</template>
<script>
import { mapGetters } from "vuex";
import AppAddTable from "../components/AppaAddAction.vue";
export default {
  name: "AppAddRefil",
  components: {
    AppAddTable,
  },
  data: function () {
    return {
      title: "Добавить заправку",
      test: [],
    };
  },
  computed: {
    ...mapGetters("equipment", ["cartridgies"]),
    ...mapGetters("repairTypes", ["printerRepairTypes"]),
  },
};
</script>
