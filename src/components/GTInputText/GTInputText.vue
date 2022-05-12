<template>
  <label :class="classes">
    <div class="gt-inputtext__leading-icon">
      <GTIcon name="gt-rotate-right-s" :size="size" />
    </div>
    <input type="text" :class="inputFieldClasses" :placeholder="placeholder" />
    <span v-if="!placeholder" class="gt-inputtext__label">Label</span>
    <div class="gt-inputtext__trailing-icon">
      <GTIcon name="gt-rotate-right-s" :size="size" />
    </div>
  </label>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTInputText",

  components: { GTIcon },

  props: {
    isError: {
      type: Boolean,
      default: false,
    },
    // type: {
    //   type: String,
    //   default: "primary",
    //   validator: function (value) {
    //     return ["primary", "secondary"].indexOf(value) !== -1;
    //   },
    // },
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
    leadingIcon: {
      type: String,
      default: "gt-rotate-right-s",
      // default: "",
    },
    trailingIcon: {
      type: String,
      default: "gt-rotate-right-s",
    },
  },

  computed: {
    classes() {
      return {
        "gt-inputtext": true,
        // [`gt-inputtext__field--${this.type}`]: true,
      };
    },
    inputFieldClasses() {
      return {
        "gt-inputtext__field": true,
        "gt-inputtext__field--error": this.isError,
        [`gt-inputtext__field--${this.size}`]: true,
        [`gt-inputtext__field--length-${this.length}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTInputText.scss";
</style>
