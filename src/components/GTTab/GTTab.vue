<template>
  <div>
    <!-- <Wds /> -->
    <W3s />
  </div>
</template>

<script>
import Wds from "./references/Wds.vue";
import W3s from "./references/W3s.vue";

export default {
  name: "GTTab",
  components: { Wds, W3s },
};
</script>

<style lang="scss">
@import "./GTTab.scss";
</style>
