<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input
      v-model="radioButtonModel"
      type="radio"
      name="radio"
      :disabled="isDisabled"
    />
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
    value: {
      type: String,
      default: "",
    },
    selectedItem: {
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
  data() {
    return {
      radioButtonModel: this.value,
    };
  },
  computed: {
    classes() {
      return {
        "gt-radio__item": true,
        "gt-radio__item--disabled": this.isDisabled,
      };
    },
  },
  watch: {
    radioButtonModel(val) {
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
