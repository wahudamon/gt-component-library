<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input type="radio" name="radio" :disabled="isDisabled" :value="text" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "GTRadioButtonItem",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
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
        "gt-radio__item": true,
        "gt-radio__item--disabled": this.isDisabled,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTRadioButton.scss";
</style>
