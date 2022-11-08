<template>
  <div class="book-item">
    <slot name="head">
      <div class="book-item__badge">
        <h3 class="book-item__title">{{ title }}</h3>
        <div class="book-item__group">{{ subTitle }}</div>
      </div>
    </slot>
    <slot name="install">
      <div class="book-item__form-wrapper">
        <form class="install">
          <div class="input-group">
            <select class="form-select" v-model="selectedItem">
              <option :value="null" selected>Выберите элемент</option>
              <template v-if="actionList.length > 0">
                <option
                  v-for="item in actionList"
                  :value="item.id"
                  :key="item.id"
                >
                  {{ item.name }}
                </option>
              </template>
            </select>
            <button type="button" class="btn btn-primary">Установить</button>
          </div>
        </form>
      </div>
    </slot>
    <slot name="lastActions"> </slot>
  </div>
</template>

<script>
export default {
  name: "AppBookItem",
  props: {
    title: String,
    subTitle: String,
    actionList: Array,
  },
  data: function () {
    return {
      selectedItem: null,
    };
  },
};
</script>

<style lang="scss">
.book-item {
  &__badge {
    margin-bottom: 30px;
  }
  &__title {
    padding-bottom: 15px;
  }
  &__form-wrapper {
    margin-bottom: 80px;
  }
  &__group {
    font-size: 24px;
  }
}
</style>
