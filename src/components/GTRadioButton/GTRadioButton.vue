<template>
  <div :class="classes">
    <slot :isDisabled="isDisabled"></slot>
  </div>
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
    selectedItem: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedItemValue: this.value,
    };
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
  watch: {
    selectedItemValue(val) {
      this.sendValueToParent(val);
    },
  },
  methods: {
    sendValueToParent(value) {
      this.$emit("update:selectedItem", value);
    },
  },
};
</script>

<style lang="scss">
@import "./GTRadioButton.scss";
</style>
