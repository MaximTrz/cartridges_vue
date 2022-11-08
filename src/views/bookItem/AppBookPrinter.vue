<template>
  <AppBookItem :title="title" :subTitle="subTitle" :actionList="groups">
  </AppBookItem>
</template>
<script>
import AppBookItem from "@/components/AppBookItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "AppBookPrinter",
  components: {
    AppBookItem,
  },
  computed: {
    ...mapGetters("books", ["findItemById", "groups"]),
    title: function () {
      return `Принтер №${this.$route.params.id}`;
    },
    subTitle: function () {
      return `${this.findItemById("printers", this.$route.params.id).name}`;
    },
  },
};
</script>
