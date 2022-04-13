<template>
  <div class="grid--container text-center mt--20">
    <div class="grid--row">
      <div class="grid--col-sm-2--gu-xl bg--teal-300">Phone</div>
      <div class="grid--col-sm-2--gu-xl bg--yellow-300">Phone</div>
    </div>
    <div class="grid--row">
      <div class="grid--col-md-2--gu-xl bg--teal-300">Tablet</div>
      <div class="grid--col-md-2--gu-xl bg--yellow-300">Tablet</div>
      <div class="grid--col-md-2--gu-xl bg--green-300">Tablet</div>
      <div class="grid--col-md-2--gu-xl bg--red-300">Tablet</div>
    </div>
    <div class="grid--row">
      <div class="grid--col-lg-2--gu-xl bg--teal-300">Desktop</div>
      <div class="grid--col-lg-2--gu-xl bg--yellow-300">Desktop</div>
      <div class="grid--col-lg-2--gu-xl bg--green-300">Desktop</div>
      <div class="grid--col-lg-2--gu-xl bg--red-300">Desktop</div>
      <div class="grid--col-lg-2--gu-xl bg--mustard-300">Desktop</div>
      <div class="grid--col-lg-2--gu-xl bg--navy-blue-300">Desktop</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grid-system",
};
</script>

<style lang="scss" scoped>
@import "../../css/color";
@import "../../css/margin";
@import "../../css/grid-system";

.sample-box {
  &--parent {
    width: 400px;
    height: 200px;
  }
  &--child {
    width: 50px;
    height: 50px;
  }
  &--item {
    height: 50px;
  }
}
</style>
