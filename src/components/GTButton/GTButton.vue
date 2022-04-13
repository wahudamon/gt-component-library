<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "GTButton",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
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
    backgroundColor: {
      type: String,
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
    style() {
      return {
        backgroundColor: this.backgroundColor,
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

<style>
@import "../../../css/color.css";
@import "../../../css/typography.css";
@import "../../../css/corner-radius.css";

.gt-btn {
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.gt-btn--primary {
  color: white;
}
.gt-btn--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.gt-btn--sm {
  min-width: 104px;
  height: 40px;
  padding: 8px, 16px, 8px, 16px;
}
.gt-btn--md {
  min-width: 160px;
  height: 48px;
  padding: 12px, 16px, 12px, 16px;
}
.gt-btn--lg {
  min-width: 224px;
  height: 56px;
  padding: 16px;
}
</style>
