<template>
  <label :class="classes">
    <div v-if="leadingIcon" class="leading-icon">
      <GTIcon :name="leadingIcon" :size="size" />
    </div>
    <input type="text" :class="inputFieldClasses" :placeholder="placeholder" />
    <span v-if="!placeholder" class="gt-inputtext__label">
      {{ error ? `${label}*` : label }}
    </span>
    <div v-if="trailingIcon" class="trailing-icon">
      <GTIcon :name="trailingIcon" :size="size" />
    </div>
    <div v-if="helperText" :class="helperClasses">
      <p>{{ helperText }}</p>
    </div>
  </label>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTInputText",

  components: { GTIcon },

  props: {
    error: {
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
      default: "",
    },
    trailingIcon: {
      type: String,
      default: "",
    },
    helperText: {
      type: String,
      default: "",
    },
  },

  computed: {
    classes() {
      return {
        "gt-inputtext": true,
        "gt-inputtext--icons": this.leadingIcon && this.trailingIcon,
        "gt-inputtext--leading-icon": this.leadingIcon && !this.trailingIcon,
        "gt-inputtext--trailing-icon": this.trailingIcon && !this.leadingIcon,
      };
    },
    inputFieldClasses() {
      return {
        "gt-inputtext__field": true,
        "gt-inputtext__field--error": this.error,
        [`gt-inputtext__field--${this.size}`]: true,
        [`gt-inputtext__field--length-${this.length}`]: true,
      };
    },
    helperClasses() {
      return {
        "gt-inputtext__helper": true,
        "gt-inputtext__helper--error": this.error,
        "ml--4": true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTInputText.scss";
</style>
