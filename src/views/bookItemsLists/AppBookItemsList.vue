<template>
  <form class="addForm" @submit.prevent="addNewItem">
    <div class="input-group mb-3">
      <span class="input-group-text">Наименование</span>
      <input
        v-model="newItem"
        class="form-control"
        type="text"
        aria-describedby="basic-addon1"
      />
    </div>
    <button @click="addNewItem" class="btn btn-primary" type="button">
      Добавить
    </button>
  </form>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер</th>
        <th scope="col">Наименование</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="item.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>
          <span class="table_link">{{ item.id }}</span>
        </td>
        <td>
          <RouterLink
            :to="{ name: routeName, params: { id: item.id } }"
            class="table_link"
            >{{ item.name }}</RouterLink
          >
        </td>
        <td>
          <button class="btn btn-danger">X</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BookItemsList",
  mounted: async function () {
    const book = this.$route.params.bookname;
    const items = this[book];
    if (typeof items != "undefined") {
      this.items = items;
      this.bookName = book;
    }
  },
  props: {
    addFunction: String,
  },
  data: function () {
    return {
      bookName: "",
      items: [],
      newItem: "",
    };
  },
  methods: {
    addNewItem: function () {
      this.$store.dispatch(`books/${this.addFunction}`, this.newItem);
      this.newItem = "";
    },
  },
  computed: {
    ...mapGetters("books", ["printers", "cartridges", "groups"]),
    routeName: function () {
      return this.bookName;
    },
  },
};
</script>

<style lang="scss">
.book-item-list {
  &__add-form {
    margin-bottom: 50px;
  }
}
</style>
