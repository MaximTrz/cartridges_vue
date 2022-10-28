<template>
  <div class="main">
    <ul class="main-action">
      <li class="main-action__item --accept">
        <div
          class="main-action__link"
          @click="showModal('toAcceptCartridgeVisible')"
        >
          Принять картридж на заправку
        </div>
      </li>
      <li class="main-action__item --send">
        <div class="main-action__link">Отправить в СЦ</div>
      </li>
      <li class="main-action__item --install">
        <div
          class="main-action__link"
          @click="showModal('setCartridgeVisible')"
        >
          Установить картридж
        </div>
      </li>
    </ul>
    <ul class="main__list">
      <li class="main__item --cartridges">
        <a class="main__link" href="#">Добавить заправку</a>
      </li>
      <li class="main__item --repair-cartridges">
        <a class="main__link" href="#">Добавить ремонт картриджа</a>
      </li>
      <li class="main__item --repair-printer">
        <a class="main__link" href="#">Добавить ремонт принтер</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MainPage",
  methods: {
    ...mapActions("modals", ["showModal"]),
  },
};
</script>

<style lang="scss">
.main {
  padding-top: 50px;
  &__list {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  &__item {
    flex-basis: 30%;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: all 0.5s ease-out;
    &:hover {
      color: black;
      border-radius: 100px;
    }
    &.--cartridges {
      background-color: lightgreen;
    }
    &.--repair-cartridges {
      background-color: lightblue;
    }
    &.--repair-printer {
      background-color: lightsalmon;
    }
  }
  &__link {
    padding: 100px 100px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    &:hover {
      color: black;
    }
  }
}

.main-action {
  display: flex;
  list-style: none;
  justify-content: space-between;

  &__item {
    transition: all 0.5s ease-out;
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      border-radius: 50px;
    }

    &.--accept {
      background-color: #33ccff;
    }

    &.--send {
      background-color: lightseagreen;
    }

    &.--install {
      background-color: #bdb76b;
    }
  }
  &__link {
    transition: all 0.5s ease-out;
    text-decoration: none;
    color: black;
    font-size: 20px;
    padding: 100px 100px;
    &:hover {
      color: beige;
    }
  }
}
</style>
