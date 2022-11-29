<template>
  <AppBookItem
    :title="title"
    :subTitle="subTitle"
    :actionList="printers"
    :updateFunction="updateCartridge"
  >
  </AppBookItem>
</template>
<script>
import AppBookItem from "@/components/AppBookItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "AppBookCartridge",
  components: {
    AppBookItem,
  },
  computed: {
    ...mapGetters("books", ["findItemById", "printers"]),
    title: function () {
      return `Картридж №${this.$route.params.id}`;
    },
    subTitle: function () {
      return `${this.findItemById("cartridges", this.$route.params.id).name}`;
    },
  },
};
</script>
