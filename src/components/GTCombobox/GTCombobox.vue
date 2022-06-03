<template>
  <div>
    <EmptyCombobox
      v-if="items.length === 0"
      :placeholder="placeholder"
      :items="items"
    />
    <DefaultCombobox v-else :placeholder="placeholder" :items="items" />
  </div>
</template>

<script>
import EmptyCombobox from "./EmptyCombobox";
import DefaultCombobox from "./DefaultCombobox";

export default {
  name: "GTCombobox",

  components: { EmptyCombobox, DefaultCombobox },

  props: {
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    placeholder: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      selectedItem: "",
    };
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

  methods: {},
};
</script>
