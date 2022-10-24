<template>
  <div class="book-item">
    <div class="book-item__badge">
      <h2 class="book-item__title">№5 Наименование</h2>
      <div class="book-item__user">Медникова</div>
      <div class="book-item__group">Операционно-кассовый</div>
    </div>
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
    <div class="book-item__last-records">
      <div class="last-records">
        <h4>Последние действия</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Дата</th>
              <th scope="col">Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><a class="table_link" href="#">04.05.2016</a></td>
              <td>Замена ракеля</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book-item",
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
}
</style>
