<template>
  <label :class="classes">
    <input class="gt-input__field" type="text" placeholder=" " />
    <span class="gt-input__label">Label</span>
  </label>
</template>

<script>
export default {
  name: "LabeledInputText",
  computed: {
    classes() {
      return {
        "gt-input": true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./LabeledInputText.scss";
</style>
