<script>
import Vue from "vue";
import { GTIcon, GTInputText, GTInputArea } from "@/entry.esm";
import GridSystem from "./examples/GridSystem.vue";
import Typography from "./examples/Typography.vue";
import ButtonsList from "./examples/ButtonsList.vue";
import CornerRadius from "./examples/CornerRadius.vue";
import CheckboxExample from "./examples/CheckboxExample.vue";
import RadioButtonExample from "./examples/RadioButtonExample.vue";
import InputTextExample from "./examples/InputTextExample.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CheckboxExample,
    RadioButtonExample,
    InputTextExample,
    GTIcon,
    GTInputText,
    GTInputArea,
    GridSystem,
    Typography,
    ButtonsList,
    CornerRadius,
  },
});
</script>

<template>
  <div id="app">
    <GTInputArea
      class="mt--15 ml--15"
      variant="outline"
      size="sm"
      length="sm"
      label="Username"
      helperText="Helper Text"
    />
    <!-- <GTInputText
      disabled
      class="mt--15 ml--15"
      variant="outline"
      size="sm"
      length="sm"
      label="Username"
      placeholder="Placeholder"
      helperText="Helper Text"
      trailingIcon="gt-paper-plane-s"
    /> -->
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
