<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input
      @click="onRadioButtonClick"
      type="radio"
      name="radio"
      :disabled="isDisabled"
      :value="value"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "GTRadioButtonItem",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "secondary"].indexOf(value) !== -1;
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    model: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
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
        [`gt-radio__item--${this.type}`]: !this.isDisabled,
      };
    },
  },
  methods: {
    sendValueToParent(value) {
      this.$emit("update:model", value);
    },
    onRadioButtonClick() {
      this.sendValueToParent(this.value);
    },
  },
};
</script>

<style lang="scss">
@import "./GTRadioButton.scss";
</style>
