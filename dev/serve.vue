<script>
import Vue from "vue";
import { GTIcon, GTInputText } from "@/entry.esm";
import GridSystem from "./examples/GridSystem.vue";
import Typography from "./examples/Typography.vue";
import ButtonsList from "./examples/ButtonsList.vue";
import CornerRadius from "./examples/CornerRadius.vue";
import CheckboxExample from "./examples/CheckboxExample.vue";
import RadioButtonExample from "./examples/RadioButtonExample.vue";
import InputTextExample from "./examples/InputTextExample.vue";
import LabeledInputText from "../src/components/GTInputText/LabeledInputText.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CheckboxExample,
    RadioButtonExample,
    InputTextExample,
    LabeledInputText,
    GTIcon,
    GTInputText,
    GridSystem,
    Typography,
    ButtonsList,
    CornerRadius,
  },
});
</script>

<template>
  <div id="app">
    <GTInputText
      class="mt--15 ml--15"
      variant="horizontal"
      size="sm"
      length="sm"
      label="Input Label"
      placeholder="Placeholder"
    />
    <!-- <input-text-example /> -->
    <!-- <buttons-list /> -->
    <!-- <checkbox-example class="mt--10" /> -->
    <!-- <radio-button-example class="mt--10" /> -->
    <!-- <button class="ml--20">
      <GTIcon name="gt-address-book-r" size="md" />
    </button> -->
    <!-- <typography />
    <grid-system />
    <corner-radius /> -->
  </div>
</template>

<style>
@import "../css/components/style.css";
</style>
