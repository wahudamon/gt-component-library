<template>
  <div>
    <!-- <Wds /> -->
    <CodepenOne />
    <!-- <CodepenTwo /> -->
  </div>
</template>

<script>
import CodepenOne from "./references/CodepenOne.vue";
import CodepenTwo from "./references/CodepenTwo.vue";
import Wds from "./references/Wds.vue";

export default {
  name: "GTTab",
  components: { Wds, CodepenOne, CodepenTwo },
};
</script>

<style lang="scss">
@import "./GTTab.scss";
</style>
