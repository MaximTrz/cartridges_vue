<template>
  <AppModalDialog>
    <template v-slot:body>
      <div class="modal-content">
        <h5 class="modal-title">Принять картридж на заправку</h5>

        <div class="modal-body">
          <select class="form-select">
            <option selected>Выберите картридж</option>
            <AppOptionsList :list="cartridgies"></AppOptionsList>
          </select>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Принять</button>
      </div>
    </template>
  </AppModalDialog>
</template>

<script>
import { mapGetters } from "vuex";
import AppModalDialog from "./AppModalDialog.vue";
import AppOptionsList from "../AppOptionsList.vue";
export default {
  name: "AppModalSetCartridge",
  components: {
    AppModalDialog,
    AppOptionsList,
  },
  computed: {
    ...mapGetters("books", ["cartridgies"]),
  },
};
</script>

<style scoped>
.modal-title {
  margin-bottom: 15px;
}
</style>
