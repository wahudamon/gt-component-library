<script>
import Vue from "vue";
import {
  GTIcon,
  GTInputText,
  GTInputArea,
  GTBreadcrumb,
  GTSlider,
  GTMultiRangeSlider,
} from "@/entry.esm";
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
    GTBreadcrumb,
    GTSlider,
    GTMultiRangeSlider,
    GridSystem,
    Typography,
    ButtonsList,
    CornerRadius,
  },
  data() {
    return {
      showAlert: true,
      crumbs: [
        { name: "Breadcrumb", path: "#" },
        { name: "Breadcrumb 2", path: "#" },
        { name: "Breadcrumb 3", path: "#" },
        { name: "Breadcrumb 4", path: "#" },
        { name: "Breadcrumb 5", path: "#" },
        { name: "Breadcrumb 6", path: "#" },
      ],
    };
  },
  methods: {
    clickAlertButton() {
      console.log("this button are clicked!");
    },
  },
});
</script>

<template>
  <div id="app">
    <GTSlider
      showAppendIcon
      appendIcon="gt-plus-s"
      class="mt--15 ml--15"
      min="1"
      max="100"
    />
    <GTMultiRangeSlider class="mt--10 ml--15" />
    <!-- <GTBreadcrumb
      class="mt--15 ml--15"
      :crumbs="crumbs"
      separatorSign="/"
      homeIcon
    /> -->
    <!-- <GTInputArea
      class="mt--15 ml--15"
      variant="outline"
      size="sm"
      length="sm"
      label="Username"
      helperText="Helper Text"
    /> -->
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
