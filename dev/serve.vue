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
    <button class="ml--20">
      <GTIcon name="gt-add-block" size="40" />
    </button>
    <GTButton class="ml--20 mt--20" primary size="small" label="Hello" />
    <checkbox-example class="ml--20 mt--10" />
    <radio-button-example class="ml--20 mt--10" />
    <!-- <typography />
    <grid-system />
    <corner-radius /> -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/margin";
</style>
