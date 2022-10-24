<template>
  <h2>Добавить заправку</h2>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select">
        <option selected>Выберите картридж</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button class="btn btn-outline-secondary" type="button">
        Добавить в список заправок
      </button>
    </div>
  </div>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select">
        <option selected>Выберите вид ремонта</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button class="btn btn-outline-secondary" type="button">
        Добавить ремонт
      </button>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер картриджа</th>
        <th scope="col">Модель</th>
        <th scope="col">Ремонт</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><a class="table_link" href="#">5</a></td>
        <td><a class="table_link" href="#">Cactus 505</a></td>
        <td>
          <div class="repair">
            Замена барабана <span class="repair__del">X</span>
          </div>
          <div class="repair">
            Замена ракеля <span class="repair__del">X</span>
          </div>
        </td>
        <td>
          <button class="btn btn-danger">X</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="save">
    <button class="btn btn-outline-success btn-lg" type="button">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "addTable",
};
</script>

<style lang="scss">
.save {
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
}
</style>
