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
            {{ item.name }}
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
  <table class="table">
    <thead>
      <slot name="tableHead">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Номер картриджа</th>
          <th scope="col">Модель</th>
          <th scope="col">Действие</th>
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
            <template v-if="item.actions.length > 0">
              <div
                v-for="repair in item.actions"
                class="repair"
                :key="repair.id"
              >
                {{ repair.name }}
                <span
                  class="repair__del"
                  @click.stop="deleteAction(item, repair)"
                  >X</span
                >
              </div>
            </template>
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
    // author: Object,
    // callback: Function,
  },
  data() {
    return {
      selectedHeadItem: null,
      selectedTableItem: null,
      selectedAction: null,
      tableItems: [
        { id: 998, name: "HP 1160", actions: [] },
        { id: 999, name: "HP 1150", actions: [] },
      ],
    };
  },
  methods: {
    addItem() {
      const item = this.findItemById(this.selectedHeadItem);
      item.actions = [];
      this.selectedTableItem = item;
      this.tableItems.push(item);
    },
    findElement(arr, id) {
      const item = arr.find((item) => item.id == id);
      return { ...item };
    },
    findItemById(id) {
      const item = this.findElement(this.items, id);
      return { ...item };
    },
    findIndexById(arr, elem) {
      const itemIndex = arr.findIndex((item) => item.id == elem);
      return itemIndex;
    },
    addAction() {
      let indexItem = this.findIndexById(
        this.tableItems,
        this.selectedTableItem.id
      );
      const actionItemIndex = this.findIndexById(
        this.actionList,
        this.selectedAction
      );

      this.tableItems[indexItem].actions.push(this.actionList[actionItemIndex]);
    },
    deleteItem(item) {
      this.tableItems = [...this.tableItems.filter((elem) => elem != item)];
      this.selectedTableItem = null;
    },
    deleteAction(item, action) {
      item.actions = item.actions.filter((elem) => elem != action);
    },
  },
  computed: {
    checkDoubleItems: function () {
      let selItem = this.findItemById(this.selectedHeadItem);
      return this.findIndexById(this.tableItems, selItem.id) > -1;
    },
    checkDoubleActions: function () {
      if (this.selectedTableItem) {
        return (
          this.findIndexById(
            this.selectedTableItem.actions,
            this.selectedAction
          ) > -1
        );
      }

      return false;
    },
    activeAddItem: function () {
      return this.selectedHeadItem == null || this.checkDoubleItems;
    },
    activeAddAction: function () {
      return (
        this.selectedAction == null ||
        this.selectedTableItem == null ||
        this.checkDoubleActions
      );
    },
  },
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
</style>
