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
        <th scope="col">Текущий отдел</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><a class="table_link" href="#">5</a></td>
        <td><a class="table_link" href="#">HP LaserJet</a></td>
        <td><a class="table_link" href="#">Бюджетный</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Books-list",
};
</script>

<style lang="scss">
.book-item-list {
  &__add-form {
    margin-bottom: 50px;
  }
}
</style>
