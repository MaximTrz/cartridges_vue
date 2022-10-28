<template>
  <h2>{{ title }}</h2>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select">
        <option value="0" selected>
          <slot name="itemName"> Выберите элемент </slot>
        </option>
        <template v-if="items.length > 0">
          <option v-for="item in items" :value="item.id" :key="item.name">
            {{ item.name }}
          </option>
        </template>
      </select>
      <button class="btn btn-outline-secondary" type="button">Добавить</button>
    </div>
  </div>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select">
        <option selected>Выберите действие</option>
        <template v-if="actionList.length > 0">
          <option
            v-for="action in actionList"
            :value="action.id"
            :key="action.name"
          >
            {{ action.name }}
          </option>
        </template>
      </select>
      <button class="btn btn-outline-secondary" type="button">
        Добавить ремонт
      </button>
    </div>
  </div>
  <table class="table">
    <thead>
      <slot name="tableHead">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Номер картриджа</th>
          <th scope="col">Модель</th>
          <th scope="col">Ремонт</th>
          <th scope="col"></th>
        </tr>
      </slot>
    </thead>
    <template v-if="tableItems.length > 0">
      <tbody>
        <tr v-for="item in tableItems" :key="item.id">
          <th scope="row">1</th>
          <td>
            <a class="table_link" href="#">{{ item.id }}</a>
          </td>
          <td>
            <a class="table_link" href="#"> {{ item.model }}</a>
          </td>
          <td>
            <template v-if="item.actions.length > 0">
              <div
                v-for="repair in item.actions"
                class="repair"
                :key="repair.id"
              >
                {{ repair.name }} <span class="repair__del">X</span>
              </div>
            </template>
          </td>
          <td>
            <button class="btn btn-danger">X</button>
          </td>
        </tr>
      </tbody>
    </template>
  </table>
  <div class="save">
    <button class="btn btn-outline-success btn-lg" type="button">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "addTable",
  props: {
    title: String,
    items: Array,
    actionList: Array,
    // author: Object,
    // callback: Function,
  },
  data() {
    return {
      tableItems: [
        { id: 1, model: "HP 1160", actions: [] },
        { id: 2, model: "HP 1150", actions: [] },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.save {
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
}
</style>
