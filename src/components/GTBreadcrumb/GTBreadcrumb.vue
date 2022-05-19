<template>
  <nav :class="classes" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <template v-if="crumbs.length !== 0 && crumbs.length <= 4">
        <li
          v-for="(crumb, i) in crumbs"
          :key="i"
          class="breadcrumb-item gt-breadcrumb__item"
        >
          <a
            v-if="i === 0 && homeIcon"
            class="gt-breadcrumb__item--previous"
            :href="crumb.path"
          >
            <GTIcon class="mb--2" name="gt-house-chimpney-s" size="sm" />
          </a>
          <a
            v-else-if="!isLastCrumb(i)"
            class="gt-breadcrumb__item--previous"
            :href="crumb.path"
          >
            {{ crumb.name }}
          </a>
          <span v-else class="gt-breadcrumb__item--active">{{
            crumb.name
          }}</span>
        </li>
      </template>
      <template v-else>
        <li
          v-for="(crumb, i) in filteredCrumbItems"
          :key="i"
          class="breadcrumb-item gt-breadcrumb__item"
        >
          <a
            v-if="i === 0 && homeIcon"
            class="gt-breadcrumb__item--previous"
            :href="crumb.path"
          >
            <GTIcon class="mb--2" name="gt-house-chimpney-s" size="sm" />
          </a>
          <a v-else class="gt-breadcrumb__item--previous" :href="crumb.path">
            {{ crumb.name }}
          </a>
        </li>
        <li class="breadcrumb-item gt-breadcrumb__item">
          <span class="gt-breadcrumb__item--active">...</span>
        </li>
        <li class="breadcrumb-item gt-breadcrumb__item">
          <span class="gt-breadcrumb__item--active">{{ lastCrumb.name }}</span>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTBreadcrumb",
  components: { GTIcon },
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
    homeIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lastCrumb: {
        path: "",
        name: "",
      },
    };
  },
  computed: {
    filteredCrumbItems: function () {
      return this.crumbs.slice(0, 3);
    },
    classes() {
      return {
        "gt-breadcrumb": true,
        [`gt-breadcrumb__separator--${this.getSeparatorName(
          this.separatorSign
        )}`]: true,
      };
    },
  },
  mounted() {
    this.getLastCrumb();
  },
  methods: {
    isLastCrumb(index) {
      return index === this.crumbs.length - 1;
    },
    getLastCrumb() {
      if (this.crumbs.length !== 0) {
        this.lastCrumb = this.crumbs.slice(-1)[0];
      }
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
