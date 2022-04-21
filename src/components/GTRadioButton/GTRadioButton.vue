<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input type="radio" name="radio" :disabled="isDisabled" :value="{ text }" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "GTRadioButton",
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
        "gt-radio": true,
        "gt-radio--disabled": this.isDisabled,
        [`gt-radio--${this.type}`]: !this.isDisabled,
        [`gt-radio--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/GTRadioButton.css";
</style>
