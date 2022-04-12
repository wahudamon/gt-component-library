<template>
  <svg :width="size" :height="size" :viewBox="selectedIcon.viewBox" fill="none">
    <path v-bind="selectedIcon.path" />
  </svg>
</template>

<script>
import icons from "../../lib/icons";

export default {
  name: "GTIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedIcon: {},
    };
  },
  mounted() {
    this.getIconByName(this.name);
  },
  methods: {
    getIconByName(name) {
      this.selectedIcon = {
        viewBox: icons[name].viewBox,
        path: icons[name].path,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
