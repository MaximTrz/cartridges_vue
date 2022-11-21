<template>
  <template v-if="listShow">
    <option v-for="item in list" :value="item.id" :key="item.id">
      {{ `№${item.id} ${item.name}` }}
    </option>
  </template>
</template>

<script>
export default {
  name: "OptionsList",
  props: {
    list: Array,
  },
  computed: {
    listShow: function () {
      return this.list.length > 0;
    },
  },
};
</script>
