<template>
  <h2>Отправить в сервисный центр</h2>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select" v-model="selectedHeadItem">
        <option :value="null" selected>
          <slot name="itemName"> Выберите элемент </slot>
        </option>
        <template v-if="items.length > 0">
          <option v-for="item in items" :value="item.id" :key="item.id">
            {{ item.name }}
          </option>
        </template>
      </select>
      <button
        class="btn btn-outline-secondary"
        type="button"
        :disabled="!activeAddButton"
        @click="addItem"
      >
        Добавить в список
      </button>
    </div>
  </div>
  <table class="table" v-if="tableItems.length > 0">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер картриджа</th>
        <th scope="col">Модель</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableItems" :key="item.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>
          <a class="table_link" href="#">{{ item.id }}</a>
        </td>
        <td>
          <a class="table_link" href="#"> {{ item.name }} </a>
        </td>
        <td>
          <button class="btn btn-danger" @click="deleteItem(item)">X</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="save" v-if="tableItems.length > 0">
    <button
      class="btn btn-outline-success btn-lg"
      type="button"
      :disabled="saveActive"
    >
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "sendToService",
  data: function () {
    return {
      items: [
        { id: 1, name: "Cactus 505" },
        { id: 2, name: "Cactus 48X" },
        { id: 3, name: "Cactus 055" },
      ],
      selectedHeadItem: null,
      slelectedTableItem: null,
      tableItems: [],
    };
  },
  methods: {
    addItem() {
      const item = this.items.find((item) => item.id == this.selectedHeadItem);
      this.tableItems.push(item);
    },
    deleteItem(item) {
      this.tableItems = this.tableItems.filter((elem) => elem != item);
    },
  },
  computed: {
    activeAddButton: function () {
      return this.selectedHeadItem != null && !this.checkDoubleItem;
    },
    checkDoubleItem: function () {
      return (
        this.tableItems.findIndex((item) => item.id == this.selectedHeadItem) >
        -1
      );
    },
    saveActive: function () {
      return !this.tableItems.length > 0;
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.addForm {
  margin-bottom: 30px;
}
</style>
