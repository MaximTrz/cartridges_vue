<template>
  <AppModalDialog>
    <template v-slot:body>
      <div class="modal-content">
        <h5 class="modal-title">Принять картридж на заправку</h5>

        <div class="modal-body">
          <select class="form-select">
            <option selected>Выберите картридж</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
import AppModalDialog from "./AppModalDialog.vue";

export default {
  name: "AppModalToAcceptCartridgies",
  components: { AppModalDialog },
};
</script>
