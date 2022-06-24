<template>
  <div :class="inputContainerClasses">
    <div v-if="variant === 'horizontal'" class="mr--2">
      <label class="label--horizontal">
        {{ label }}
      </label>
    </div>
    <div v-if="variant === 'vertical'" class="mb--2">
      <label class="label--vertical">
        {{ label }}
      </label>
    </div>
    <label :class="classes">
      <div>
        <div v-if="leadingIcon" class="icon icon--leading">
          <GTIcon :name="leadingIcon" size="sm" />
        </div>
        <input
          v-model="inputTextModel"
          type="text"
          :class="inputFieldClasses"
          :placeholder="placeholder"
          :disabled="disabled"
        />
        <span
          v-if="!placeholder && variant === 'outline'"
          class="gt-inputtext__label"
        >
          {{ error ? `${label}*` : label }}
        </span>
        <div v-if="trailingIcon" class="icon icon--trailing">
          <GTIcon :name="trailingIcon" size="sm" />
        </div>
        <div v-if="helperText" :class="helperClasses">
          <p>{{ helperText }}</p>
        </div>
      </div>
    </label>
  </div>
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
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["md"].indexOf(value) !== -1;
      },
    },
    length: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      default: "outline",
      validator: function (value) {
        return ["outline", "horizontal", "vertical"].indexOf(value) !== -1;
      },
    },
    value: {
      type: String,
      default: "",
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

  data() {
    return {
      inputTextModel: this.value,
    };
  },

  computed: {
    classes() {
      return {
        "gt-inputtext": true,
        [`gt-inputtext--${this.length}`]: true,
        "gt-inputtext--icons": this.leadingIcon && this.trailingIcon,
        "gt-inputtext--leading-icon": this.leadingIcon && !this.trailingIcon,
        "gt-inputtext--trailing-icon": this.trailingIcon && !this.leadingIcon,
      };
    },
    inputContainerClasses() {
      return {
        "d-flex flex-row": this.variant === "horizontal",
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

  watch: {
    inputTextModel(val) {
      this.sendValueToParent(val);
    },
  },

  methods: {
    sendValueToParent(value) {
      this.$emit("update:value", value);
    },
  },
};
</script>

<style lang="scss">
@import "./GTInputText.scss";
</style>
