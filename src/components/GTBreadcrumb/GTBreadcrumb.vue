<template>
  <nav class="gt-breadcrumb" aria-label="breadcrumb">
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
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit("selected", crumb);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./GTBreadcrumb.scss";
</style>
