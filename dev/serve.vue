<script>
import Vue from "vue";
import {
  GTIcon,
  GTInputText,
  GTInputArea,
  GTBreadcrumb,
  GTAlert,
  GTCombobox,
  GTTab,
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
    GTAlert,
    GTCombobox,
    GTTab,
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
      comboboxOptions: [
        "Lamborghini",
        "Ferarri",
        "Mitsubishi",
        "Toyota",
        "Suzuki",
        "Supra",
        "Chevrolet",
        "Pulsar",
      ],
      miniCbxOptions: ["Lamborghini", "Ferarri"],
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
    <GTTab class="mt--15 mx--15" />
  </div>
</template>

<style>
@import "../css/components/style.css";
</style>
