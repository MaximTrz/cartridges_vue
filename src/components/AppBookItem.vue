<template>
  <div class="book-item">
    <div class="book-item__badge">
      <h2 class="book-item__title">№5 Наименование</h2>
      <div class="book-item__user">Медникова</div>
      <div class="book-item__group">Операционно-кассовый</div>
    </div>
    <slot name="install">
      <div class="book-item__form-wrapper">
        <form class="install">
          <div class="input-group">
            <select class="form-select">
              <option selected>Выберите принтер</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
};
</script>
