<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTTimelineItem",
  props: {
    orientation: {
      Type: String,
      default: "right",
      validator: function (value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        row: true,
        [`row-${this.orientation}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
