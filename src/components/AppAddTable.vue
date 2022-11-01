<template>
  <h2>{{ title }}</h2>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select" v-model="selectedHeadItem">
        <option :value="null" selected>
          <slot name="itemName"> Выберите элемент </slot>
        </option>
        <template v-if="items.length > 0">
          <option v-for="item in items" :value="item.id" :key="item.name">
            {{ `№${item.id}  ${item.name}` }}
          </option>
        </template>
      </select>
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="addItem"
        :disabled="activeAddItem"
      >
        Добавить
      </button>
    </div>
  </div>
  <slot name="formAddActions"> </slot>
  <slot>
    <table class="table">
      <thead>
        <slot name="tableHead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Идентификатор</th>
            <th scope="col">Наименование</th>
            <th scope="col"></th>
          </tr>
        </slot>
      </thead>
      <template v-if="tableItems.length > 0">
        <tbody>
          <tr
            v-for="(item, index) in tableItems"
            :key="item.id"
            @click="selectedTableItem = item"
            :class="{
              selected: selectedTableItem == item,
            }"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <a class="table_link" href="#">{{ item.id }}</a>
            </td>
            <td>
              <a class="table_link" href="#"> {{ item.name }}</a>
            </td>
            <td>
              <button class="btn btn-danger" @click.stop="deleteItem(item)">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </template>
    </table>
  </slot>
  <div class="save">
    <button class="btn btn-outline-success btn-lg" type="button">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "AppAddTable",
  props: {
    title: String,
    items: Array,
    actionList: Array,
  },
  data() {
    return {
      selectedHeadItem: null,
      selectedTableItem: null,
      selectedAction: null,
      tableItems: [],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.save {
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
}
.repair {
  &__del {
    background-color: red;
    cursor: pointer;
    border-radius: 5px;
    padding: 1px 3px;
    color: white;
    font-size: 10px;
  }
}
</style>

<style scoped>
.selected {
  border: 2px solid darkgrey;
}
.addForm {
  margin-bottom: 15px;
}
h2 {
  margin-bottom: 20px;
}
</style>
