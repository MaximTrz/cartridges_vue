<template>
  <div class="books">
    <div class="books-item">
      <div class="card">
        <RouterLink
          :to="{ name: 'bookItemsList', params: { bookname: 'cartridges' } }"
        >
          <div class="card-body">
            <h5 class="card-title">Картриджи</h5>
          </div></RouterLink
        >
      </div>
    </div>
    <div class="books-item">
      <div class="card">
        <RouterLink
          :to="{ name: 'bookItemsList', params: { bookname: 'printers' } }"
        >
          <div class="card-body">
            <h5 class="card-title">Принтеры</h5>
          </div></RouterLink
        >
      </div>
    </div>
    <div class="books-item">
      <div class="card">
        <RouterLink
          :to="{ name: 'bookItemsList', params: { bookname: 'groups' } }"
        >
          <div class="card-body">
            <h5 class="card-title">Отделы</h5>
          </div></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books-list",
};
</script>

<style lang="scss">
.books {
  display: flex;
  justify-content: space-between;
  &-item {
    flex-basis: 30%;
  }
}
</style>
