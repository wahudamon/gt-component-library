<template>
  <label :class="classes">
    Label
    <input type="checkbox" />
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
        return ["primary", "secondary", "link"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    // should be deleted!
    text: {
      type: String,
      required: true,
    },
  },

  computed: {
    classes() {
      return {
        "gt-checkbox": true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./GTCheckbox";
</style>
