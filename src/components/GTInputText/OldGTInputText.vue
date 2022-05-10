<template>
  <input
    :class="classes"
    type="text"
    name=""
    id=""
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "GTInputText",
  props: {
    isError: {
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
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
    length: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return {
        "gt-inputtext": true,
        "gt-inputtext--error": this.isError,
        [`gt-inputtext--${this.type}`]: true,
        [`gt-inputtext--${this.size}`]: true,
        [`gt-inputtext--length-${this.length}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTInputText.scss";
</style>
