<template>
  <section>
    <div class="icon"></div>
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
export default {
  name: "GTTimelineCard",
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
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
