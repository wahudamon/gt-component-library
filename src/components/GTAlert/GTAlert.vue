<template>
  <div class="card" style="width: 416px">
    <div class="row g-0">
      <div class="col-md-1 text-end">
        <div class="card-body">
          <GTIcon name="gt-house-chimpney-s" size="sm" />
        </div>
      </div>
      <div class="col-md-11">
        <div class="card-body">
          <h5 class="card-title mb-2">Informational Alert</h5>
          <p class="card-text">
            Explain how to resolve the issue by including any troubleshooting
            actions or next steps.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTAlert",
  components: { GTIcon },
};
</script>

<style lang="scss">
@import "./GTAlert.scss";
</style>
