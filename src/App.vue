<template>
  <header class="header">
    <span class="fs-4"
      ><a class="text-dark text-decoration-none" href="#"
        >Управление оргтехникой</a
      ></span
    >
    <nav class="header-nav">
      <a class="header-nav__link" href="#" target="_blank">Заправки</a
      ><a class="header-nav__link" href="#" target="_blank">Ремонты</a>
      <router-link :to="{ name: 'books' }" class="header-nav__link">
        Справочники
      </router-link>

      <a class="header-nav__link" href="#" target="_blank">Отчеты</a
      ><a class="header-nav__link --exit" href="#" target="_blank">Выход</a>
    </nav>
  </header>
  <div class="container">
    <router-view />
  </div>
  <AppModalToAcceptCartridgies
    v-if="setCartridgeVisible"
  ></AppModalToAcceptCartridgies>
  <AppModalSetCartrige v-if="toAcceptCartridgeVisible"></AppModalSetCartrige>
</template>

<script>
import AppModalToAcceptCartridgies from "./components/Modals/AppModalToAcceptCartridgies.vue";
import AppModalSetCartrige from "./components/Modals/AppModalSetCartrige.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppModalToAcceptCartridgies,
    AppModalSetCartrige,
  },
  computed: {
    ...mapGetters("modals", [
      "setCartridgeVisible",
      "toAcceptCartridgeVisible",
    ]),
  },
};
</script>

<style lang="scss">
$base-font-size: 16px;

//Разрешения экранов
$phone-width: 320px;
$tablet-width: 768px;
$small-desktop-width: 992px;
$desktop-width: 1200px;
$wide-desktop-width: 1400px;

//Цвета
$base-color: #602668;
.header {
  display: flex;
  height: 100px;
  border-bottom: 2px solid gray;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 60px;

  &__logo:hover {
    svg {
      fill-opacity: 10%;
    }
  }

  &__hz:hover {
    svg {
      fill-opacity: 10%;
    }
  }
}
.header-nav {
  display: flex;
  height: 100%;
  &__link {
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-left: 1px solid gray;
    text-decoration: none;
    transition: all ease-out 0.3s;
    color: #000;
    &:last-child {
      border-right: 1px solid gray;
    }
    &.--exit {
      background-color: LightGray;
    }
    &:hover,
    &:focus {
      background-color: $base-color;
      color: #fff;
    }
  }
}
</style>
