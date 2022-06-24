<template>
  <label :class="classes">
    <p class="label--title">{{ text }}</p>
    <p class="label--subtitle">{{ subtext }}</p>
    <input
      id="gt-checkbox"
      type="checkbox"
      :disabled="isDisabled"
      :value="value"
      @click="onCheckboxClick"
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
    value: {
      type: String,
      default: "",
    },
    model: {
      type: Array,
      default: () => {
        return [];
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

  data() {
    return {
      checked: false,
      checkboxItems: [],
    };
  },

  computed: {
    classes() {
      return {
        "gt-checkbox__item": true,
        "gt-checkbox__item--disabled": this.isDisabled,
        [`gt-checkbox__item--${this.type}`]: !this.isDisabled,
      };
    },
  },

  methods: {
    sendValueToParent(value) {
      this.checkboxItems = this.model;
      if (this.checked) {
        this.checkboxItems.push(value);
      } else {
        const currentValueIndex = this.checkboxItems.findIndex(
          (item) => item === value
        );

        if (currentValueIndex !== -1) {
          this.checkboxItems.splice(currentValueIndex, 1);
        }
      }
      this.$emit("update:model", this.checkboxItems);
    },
    onCheckboxClick() {
      this.checked = !this.checked;
      this.sendValueToParent(this.value);
    },
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
