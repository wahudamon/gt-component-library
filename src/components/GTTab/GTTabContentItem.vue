<template>
  <div :id="contentId" data-tab-content :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabContentItem",

  props: {
    contentId: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        active: this.isActive,
      };
    },
  },
};
</script>
