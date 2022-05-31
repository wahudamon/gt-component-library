<template>
  <select :class="classes">
    <option value="select">Select a car...</option>
    <option value="lamborghini">Lamborghini</option>
    <option value="ferrari">Ferrari</option>
    <option value="mitsubishi">Mitsubishi</option>
    <option value="toyota">Toyota</option>
    <option value="suzuki">Suzuki</option>
    <option value="supra">Supra</option>
    <option value="chevrolet">Chevrolet</option>
    <option value="pulsar">Pulsar</option>
  </select>
</template>

<script>
export default {
  name: "GTCombobox",

  props: {
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        "gt-combobox": true,
        "form-select": true,
        "form-select-sm": this.size && this.size === "sm",
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTCombobox.scss";
</style>
