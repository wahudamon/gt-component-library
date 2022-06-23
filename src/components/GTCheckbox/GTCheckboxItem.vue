<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input
      id="gt-checkbox"
      type="checkbox"
      :disabled="isDisabled"
      :value="text"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "GTCheckboxItem",

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
        "gt-checkbox__item": true,
        "gt-checkbox__item--disabled": this.isDisabled,
        [`gt-checkbox__item--${this.type}`]: !this.isDisabled,
        [`gt-checkbox__item--${this.size}`]: true,
        [`gt-checkbox__item--${this.size}-indeterminate`]:
          this.checkIndeterminate(),
      };
    },
  },

  methods: {
    checkIndeterminate() {
      let checkboxObj = document.getElementById("gt-checkbox");
      return checkboxObj ? checkboxObj.indeterminate : false;
    },
  },
};
</script>

<style lang="scss">
@import "./GTCheckbox.scss";
</style>
