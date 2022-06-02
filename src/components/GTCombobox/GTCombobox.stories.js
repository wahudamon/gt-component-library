import GTCombobox from "./GTCombobox.vue";

const comboboxOptions = [
  "Lamborghini",
  "Ferarri",
  "Mitsubishi",
  "Toyota",
  "Suzuki",
  "Supra",
  "Chevrolet",
  "Pulsar",
];

export default {
  title: "Components/GTCombobox",
  component: GTCombobox,
  // argTypes: {
  //   separatorSign: {
  //     control: { type: "select" },
  //     options: ["/", "-", "|", ">"],
  //   },
  // },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "A combo box is a commonly used graphical user interface widget (or control). it is a combination of a drop-down list or list box and a single-line editable textbox, allowing the user to either type a value directly or select a value from the list.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCombobox },
  template: '<GTCombobox v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  items: comboboxOptions,
  placeholder: "Select a car...",
};

export const EmptyDataState = Template.bind({});
EmptyDataState.args = {
  items: [],
  placeholder: "Select an animal...",
};
