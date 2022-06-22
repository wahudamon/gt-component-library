<template>
  <div :class="classes">
    <p class="timeline__title">{{ title }}</p>
    <div class="center-line"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTTimeline",
  props: {
    title: {
      type: String,
      default: "",
    },
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
