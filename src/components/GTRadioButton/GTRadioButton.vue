<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTRadioButton",
  props: {
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        "gt-radio": true,
        [`gt-radio--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTRadioButton.scss";
</style>
