<template>
  <div :class="classes">
    <div class="center-line"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTTimeline",
  props: {
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        timeline__wrapper: !this.center,
        "center-timeline__wrapper": this.center,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
