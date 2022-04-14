<script>
import Vue from "vue";
import { GTButton, GTIcon } from "@/entry.esm";
import GridSystem from "./examples/GridSystem.vue";
import Typography from "./examples/Typography.vue";
import CornerRadius from "./examples/CornerRadius.vue";
import CheckboxExample from "./examples/CheckboxExample.vue";
import RadioButtonExample from "./examples/RadioButtonExample.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CheckboxExample,
    RadioButtonExample,
    GTButton,
    GTIcon,
    GridSystem,
    Typography,
    CornerRadius,
  },
});
</script>

<template>
  <div id="app">
    <GTButton class="ml--20 mt--20" primary size="sm" label="Button" />
    <!-- <checkbox-example class="ml--20 mt--10" />
    <radio-button-example class="ml--20 mt--10" /> -->
    <!-- <button class="ml--20">
      <GTIcon name="gt-address-book-r" size="md" />
    </button> -->
    <!-- <typography />
    <grid-system />
    <corner-radius /> -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/margin";
</style>
