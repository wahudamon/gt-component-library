<template>
  <section>
    <div :class="circleClasses">
      <GTIcon v-if="icon" :name="icon" size="sm" />
    </div>
    <div class="details">
      <div>
        <span class="title mr--6">{{ label }}</span>
        <span>{{ subLabel }}</span>
      </div>
      <span>{{ lastRecentIndicator }}</span>
    </div>
    <p>
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
    lastRecentIndicator: {
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
