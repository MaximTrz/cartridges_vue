<template>
  <form class="addForm">
    <div class="input-group mb-3">
      <span class="input-group-text">Наименование</span>
      <input class="form-control" type="text" aria-describedby="basic-addon1" />
    </div>
    <button class="btn btn-primary" type="submit">Добавить</button>
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
  data: function () {
    return {
      bookName: "",
      items: [],
    };
  },
  computed: {
    ...mapGetters("books", ["printers", "cartridgies", "groups"]),
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
