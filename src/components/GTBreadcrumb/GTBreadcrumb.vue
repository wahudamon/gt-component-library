<template>
  <nav :class="classes" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, i) in crumbs"
        :key="i"
        class="breadcrumb-item gt-breadcrumb__item"
      >
        <a
          v-if="!isLast(i)"
          class="gt-breadcrumb__item--previous"
          :href="crumb.path"
        >
          {{ crumb.name }}
        </a>

        <span v-else class="gt-breadcrumb__item--active">{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "GTBreadcrumb",
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
    separatorSign: {
      type: String,
      default: "/",
      validator: function (value) {
        return ["/", "-", "|", ">"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        "gt-breadcrumb": true,
        [`gt-breadcrumb__separator--${this.getSeparatorName(
          this.separatorSign
        )}`]: true,
      };
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit("selected", crumb);
    },
    getSeparatorName(sign) {
      switch (sign) {
        case "/":
          return "slash";
        case "-":
          return "minus";
        case "|":
          return "pipe";
        case ">":
          return "angle-bracket";
        default:
          return "slash";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./GTBreadcrumb.scss";
</style>
