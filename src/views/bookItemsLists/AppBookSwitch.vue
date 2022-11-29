<template>
  <AppBookItemsList
    v-if="book.cartridges"
    :addFunction="'insertCartridges'"
    :deleteFunction="'deleteCartridge'"
  ></AppBookItemsList>
  <AppBookItemsList v-if="book.printers"></AppBookItemsList>
  <AppBookItemsList v-if="book.groups"></AppBookItemsList>
</template>
<script>
import AppBookItemsList from "./AppBookItemsList.vue";
export default {
  name: "AppBookSwitch",
  components: { AppBookItemsList },
  mounted: function () {
    this.bookName = this.$route.params.bookname;
  },
  data() {
    return {
      bookName: "",
    };
  },
  computed: {
    book: function () {
      return {
        printers: this.bookName == "printers",
        cartridges: this.bookName == "cartridges",
        groups: this.bookName == "groups",
      };
    },
  },
};
</script>
