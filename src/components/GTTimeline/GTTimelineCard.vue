<template>
  <section>
    <div :class="circleClasses">
      <GTIcon v-if="icon" :name="icon" size="sm" />
    </div>
    <div class="details">
      <div>
        <span class="title mr--6">{{ label }}</span>
        <span v-if="subLabel" class="subtitle">{{ subLabel }}</span>
      </div>
      <span class="created-time__text">{{ createdTime }}</span>
    </div>
    <p class="content__text">
      {{ content }}
    </p>
  </section>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTTimelineCard",
  components: { GTIcon },
  props: {
    icon: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
    subLabel: {
      type: String,
      default: "",
    },
    createdTime: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  computed: {
    circleClasses() {
      return {
        icon: true,
        "no-icon": !this.icon,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
