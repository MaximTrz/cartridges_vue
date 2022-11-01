<template>
  <AppAddTable :title="title" :items="items" :actionList="actionList">
    <template v-slot:formAddActions>
      <div class="addForm">
        <div class="input-group">
          <select class="form-select" v-model="selectedAction">
            <option :value="null" selected>Выберите действие</option>
            <template v-if="actionList.length > 0">
              <option
                v-for="action in actionList"
                :value="action.id"
                :key="action.id"
              >
                {{ action.name }}
              </option>
            </template>
          </select>
          <button class="btn btn-outline-secondary" type="button">
            Добавить действие
          </button>
        </div>
      </div>
    </template>
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
import AppAddTable from "./AppAddTable.vue";
export default {
  name: "AppAddRefil",
  components: {
    AppAddTable,
  },
  props: {
    items: Array,
    actionList: Array,
  },
  data: function () {
    return {
      title: "Добавить заправку",
    };
  },
};
</script>
