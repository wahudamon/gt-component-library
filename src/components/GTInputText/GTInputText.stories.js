import GTInputText from "./GTInputText.vue";

export default {
  title: "Components/GTInputText",
  component: GTInputText,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    length: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component: "Lorem ipsum dolor sir amet.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTInputText },
  template: '<GTInputText v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Username",
};
