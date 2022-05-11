<template>
  <label :class="classes">
    <input type="text" class="gt-inputtext__field" :placeholder="placeholder" />
    <span v-if="!placeholder" class="gt-inputtext__label">
      <span><GTIcon name="gt-rotate-right-s" :size="size" /></span>
      Label
    </span>
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
  },

  computed: {
    classes() {
      return {
        "gt-inputtext": true,
        "gt-inputtext__field--error": this.isError,
        // [`gt-inputtext__field--${this.type}`]: true,
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
