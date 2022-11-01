<template>
  <h2>Отправить в сервисный центр</h2>
  <div class="addForm">
    <div class="input-group">
      <select class="form-select">
        <option :value="null" selected>Выберите картридж</option>
        <template v-if="cartidgies.length > 0">
          <option v-for="item in cartidgies" :value="item.id" :key="item.id">
            {{ item.name }}
          </option>
        </template>
      </select>
      <button class="btn btn-outline-secondary" type="button">
        Добавить в список
      </button>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Номер картриджа</th>
        <th scope="col">Модель</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><a class="table_link" href="#">5</a></td>
        <td><a class="table_link" href="#">Cactus 505 </a></td>
        <td><button class="btn btn-danger">X</button></td>
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
  name: "sendToService",
  data: function () {
    return {
      cartidgies: [
        { id: 1, name: "Cactus 505" },
        { id: 2, name: "Cactus 48X" },
        { id: 3, name: "Cactus 055" },
      ],
    };
  },
};
</script>
