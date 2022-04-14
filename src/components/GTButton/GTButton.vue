<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "GTButton",

  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        "gt-btn": true,
        "bg--primary-sun": true,
        disabled: this.disabled,
        "gt-btn--primary": this.primary,
        "gt-btn--secondary": !this.primary,
        [`gt-btn--${this.size}`]: true,
        "cr--md": true,
        "poppins poppins--btn-2": true,
        "text-center": true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss">
@import "./GTButton.scss";
</style>
