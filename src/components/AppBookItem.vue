<template>
  <div class="book-item">
    <slot name="head">
      <div class="book-item__badge">
        <h3 class="book-item__title">{{ title }}</h3>
        <div class="book-item__group" v-if="!editMode">
          {{ subTitle }}
          <span class="book-item__edit" @click="changeEditMode">
            <font-awesome-icon icon="pen-to-square" />
          </span>
        </div>
        <div v-else class="input-group">
          <span class="input-group-text">Наименование</span>
          <input
            :value="subTitle"
            class="form-control"
            type="text"
            aria-describedby="basic-addon1"
          />
          <button @click="save" type="button" class="btn btn-primary">
            Сохранить
          </button>
        </div>
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
      editMode: false,
    };
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    save() {
      this.editMode = false;
    },
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
  &__edit {
    cursor: pointer;
  }
}
</style>
