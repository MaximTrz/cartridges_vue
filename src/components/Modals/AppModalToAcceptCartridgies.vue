<template>
  <AppModalDialog>
    <template v-slot:body>
      <h5 class="modal-title">Установить картридж в принтер</h5>
      <form class="install">
        <div class="input-group">
          <select class="form-select">
            <option selected>Выберите картридж</option>
            <AppOptionsList :list="cartridges"></AppOptionsList>
          </select>
          <select class="form-select">
            <option selected>Выберите принтер</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-primary">Установить</button>
    </template>
  </AppModalDialog>
</template>

<script>
import AppModalDialog from "./AppModalDialog.vue";
import { mapGetters } from "vuex";
import AppOptionsList from "../AppOptionsList.vue";

export default {
  name: "AppModalToAcceptCartridgies",
  components: { AppModalDialog, AppOptionsList },
  computed: {
    ...mapGetters("books", ["cartridges"]),
  },
};
</script>
