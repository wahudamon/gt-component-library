<template>
  <button
    type="button"
    :disabled="isDisabled || isLoading"
    :class="classes"
    @click="onClick"
  >
    <template v-if="isLoading && !icon">
      <GTIcon animate name="gt-rotate-right-s" :size="size" />
    </template>
    <template v-else-if="!isLoading && !icon">
      {{ text }}
    </template>
    <template v-else-if="icon && isPrependIcon">
      <GTIcon :name="icon" :size="size" />
      <span> {{ text }}</span>
    </template>
    <template v-else-if="icon && isAppendIcon">
      <span>{{ text }} </span>
      <GTIcon :name="icon" :size="size" />
    </template>
    <template v-else>
      <GTIcon :name="icon" :size="size" />
    </template>
  </button>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTButton",

  components: { GTIcon },

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
    variant: {
      type: String,
      default: "navy-blue",
      validator: function (value) {
        return (
          [
            "navy-blue",
            "sea-foam",
            "sun",
            "mustard",
            "charcoal",
            "chocolate",
            "teal",
            "success",
            "link",
            "error",
            "warning",
          ].indexOf(value) !== -1
        );
      },
    },
    // should be deleted!
    text: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    isPrependIcon: {
      type: Boolean,
      default: false,
    },
    isAppendIcon: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        "gt-btn": true,
        [`gt-btn--${this.type}`]: true,
        "gt-btn--loading": this.isLoading,
        [`gt-btn--${this.size}`]: true,
        [`bg--${this.formatVariant(this.variant)}`]:
          this.variant && this.type == "primary",
        [`border--${this.formatVariant(this.variant)}`]:
          this.variant && this.type == "secondary",
        [`text--${this.formatVariant(this.variant)}`]:
          this.variant && this.type == "link",
        "cr--md": true,
        "poppins poppins--btn-2": true,
        "text-center": true,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
    formatVariant(variant) {
      let formattedVariant = "";
      if (
        variant === "navy-blue" ||
        variant === "sea-foam" ||
        variant === "sun" ||
        variant === "mustard"
      ) {
        formattedVariant = `primary-${variant}`;
      } else if (
        variant === "charcoal" ||
        variant === "chocolate" ||
        variant === "teal"
      ) {
        formattedVariant = `secondary-${variant}`;
      } else {
        formattedVariant = `semantic-${variant}`;
      }

      return formattedVariant;
    },
  },
};
</script>

<style lang="scss">
@import "../../../scss/components/GTButton.scss";
</style>
