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
      default: "",
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
        "bg--primary-navy-blue": !this.variant && this.type == "primary",
        [`bg--${this.variant}`]: this.variant && this.type == "primary",
        [`border--${this.variant}`]: this.variant && this.type == "secondary",
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
  },
};
</script>

<style lang="scss">
@import "./GTButton.scss";
</style>
