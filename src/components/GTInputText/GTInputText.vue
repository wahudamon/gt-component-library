<template>
  <input
    class="gt-inputtext"
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
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  // computed: {
  //   classes() {
  //     return {
  //       "gt-radio": true,
  //       "gt-radio--disabled": this.isDisabled,
  //       [`gt-radio--${this.type}`]: !this.isDisabled,
  //       [`gt-radio--${this.size}`]: true,
  //     };
  //   },
  // },
};
</script>

<style lang="scss">
@import "./GTInputText.scss";
</style>
