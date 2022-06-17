<template>
  <div class="wrapper">
    <div class="center-line"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTTimeline",
  props: {
    fullCard: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        wrapper: !this.fullCard,
        "full-card__wrapper": this.fullCard,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
