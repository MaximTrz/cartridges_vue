<template>
  <form class="filter">
    <div class="filter__group">
      <div class="input-group">
        <span class="input-group-text">Начальня и конечная даты</span>
        <input class="form-control" type="date" aria-label="Дата начальная" />
        <input class="form-control" type="date" aria-label="Дата конечная" />
      </div>
    </div>
    <div class="filter__submit">
      <button class="btn btn-primary" type="submit">Получить</button>
    </div>
  </form>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Дата</th>
        <th scope="col">Номер картриджа</th>
        <th scope="col">Модель</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><a class="table_link" href="#">04.05.2016</a></td>
        <td><a class="table_link" href="#">5</a></td>
        <td><a class="table_link" href="#">Cactus 505</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "refillCartridge",
};
</script>
