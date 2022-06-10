<template>
  <table :class="classes">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: "GTTable",

  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        table: true,
        "table-sm": this.size === "sm",
        "table-hover": this.hover,
        "table-bordered": this.bordered,
        "table-borderless": !this.borderless,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTable.scss";
</style>
