<template>
  <li :data-tab-target="`#${tabId}`" :class="classes">
    <p class="tab__text">{{ title }}</p>
  </li>
</template>

<script>
// import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "TabItem",
  // components: { GTIcon },

  props: {
    icons: {
      type: String,
      default: "",
    },
    tabId: {
      type: String,
      default: "",
    },
    title: {
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
        tab: true,
      };
    },
  },
};
</script>
