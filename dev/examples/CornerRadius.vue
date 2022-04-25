<template>
  <div class="sample-box--child m--20 cr--lg bg--chocolate-400"></div>
</template>

<script>
export default {
  name: "corner-radius",
};
</script>

<style lang="scss" scoped>
@import "../../css/foundations/style.css";

.sample-box {
  &--child {
    width: 50px;
    height: 50px;
  }
}
</style>
