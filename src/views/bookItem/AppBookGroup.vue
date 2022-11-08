<template>
  <AppBookItem :title="title" :subTitle="subTitle" :actionList="[]">
    <template v-slot:install>
      <div>Когда-нибудь здесь что-нибудь будет, пока все в разработке</div>
    </template>
  </AppBookItem>
</template>
<script>
import AppBookItem from "@/components/AppBookItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "AppBookGroup",
  components: {
    AppBookItem,
  },
  computed: {
    ...mapGetters("books", ["findItemById"]),
    title: function () {
      return `${this.findItemById("groups", this.$route.params.id).name} отдел`;
    },
    subTitle: function () {
      return ``;
    },
  },
};
</script>
