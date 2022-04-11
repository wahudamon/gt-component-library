<script>
import Vue from "vue";
// import { Button } from "@/entry.esm";
// import GridSystem from "./examples/GridSystem.vue";
// import Typography from "./examples/Typography.vue";
// import CornerRadius from "./examples/CornerRadius.vue";
import CheckboxExample from "./examples/CheckboxExample.vue";
import RadioButtonExample from "./examples/RadioButtonExample.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CheckboxExample,
    RadioButtonExample,
    // Button,
    // GridSystem,
    // Typography,
    // CornerRadius,
  },
});
</script>

<template>
  <div id="app">
    <checkbox-example class="ml--20 mt--20" />
    <radio-button-example class="ml--20 mt--10" />
    <!-- <typography />
    <grid-system />
    <corner-radius /> -->
    <!-- <Button primary size="small" label="Hello World!" /> -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/margin";
</style>
