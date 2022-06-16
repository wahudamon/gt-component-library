<template>
  <div class="wrapper">
    <div class="center-line"></div>
    <slot></slot>
  </div>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTTimeline",
  components: { GTIcon },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
