<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input type="checkbox" :disabled="isDisabled" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "GTCheckbox",

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "secondary"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      default: "",
    },
    subtext: {
      type: String,
      default: "",
    },
  },

  computed: {
    classes() {
      return {
        "gt-checkbox": true,
        "gt-checkbox--disabled": this.isDisabled,
        [`gt-checkbox--${this.type}`]: !this.isDisabled,
        [`gt-checkbox--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./GTCheckbox";
</style>
