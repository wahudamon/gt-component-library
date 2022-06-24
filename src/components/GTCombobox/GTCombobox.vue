<template>
  <div>
    <EmptyCombobox
      v-if="items.length === 0"
      :size="size"
      :placeholder="placeholder"
      :items="items"
    />
    <DefaultCombobox
      v-else
      :size="size"
      :placeholder="placeholder"
      :items="items"
      :selectedItem.sync="cbxSelectedItem"
    />
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
    selectedItem: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Select an item...",
    },
  },

  data() {
    return {
      cbxSelectedItem: this.selectedItem,
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

  watch: {
    cbxSelectedItem(val) {
      this.sendValueToParent(val);
    },
  },

  methods: {
    sendValueToParent(value) {
      this.$emit("update:selectedItem", value);
    },
  },
};
</script>
