<template>
  <div>
    <!-- <Wds /> -->
    <CodepenOne />
    <!-- <CodepenTwo /> -->
  </div>
</template>

<script>
import CodepenOne from "./CodepenOne.vue";
import CodepenTwo from "./CodepenTwo.vue";
import Wds from "./Wds.vue";

export default {
  name: "TabReferences",
  components: { Wds, CodepenOne, CodepenTwo },
};
</script>

<style lang="scss"></style>
