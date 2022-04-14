<template>
  <button
    type="button"
    :disabled="isDisabled"
    :class="classes"
    @click="onClick"
  >
    <template v-if="!icon">
      {{ text }}
    </template>
    <template v-else-if="icon && isPrependIcon">
      <GTIcon name="gt-paper-plane-s" :size="size" />
      <span> {{ text }}</span>
    </template>
    <template v-else-if="icon && isAppendIcon">
      <span>{{ text }} </span>
      <GTIcon name="gt-paper-plane-s" :size="size" />
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
    text: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
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
  },

  computed: {
    classes() {
      return {
        "gt-btn": true,
        "bg--primary-navy-blue": true,
        "gt-btn--primary": this.primary,
        "gt-btn--secondary": !this.primary,
        [`gt-btn--${this.size}`]: true,
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
