<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTCheckbox",

  props: {
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
        [`gt-checkbox--${this.size}`]: true,
        [`gt-checkbox--${this.size}-indeterminate`]: this.checkIndeterminate(),
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
