<template>
  <div>
    <TabReferences />
  </div>
</template>

<script>
import TabReferences from "./references/TabReferences.vue";

export default {
  name: "GTTab",
  components: { TabReferences },
};
</script>

<style lang="scss">
@import "./GTTab.scss";
</style>
