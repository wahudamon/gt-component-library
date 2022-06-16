<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTTimelineItem",
  computed: {
    classes() {
      return {
        row: true,
        "row-right": true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
