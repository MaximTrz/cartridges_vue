<template>
  <AppAddTable :title="title" :items="cartridgies" :actionList="actionList">
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
          <button
            class="btn btn-outline-secondary"
            type="button"
            :disabled="activeAddAction"
            @click="addAction"
          >
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
