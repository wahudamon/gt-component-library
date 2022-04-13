import GTButton from "./GTButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/GTButton",
  component: GTButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    viewMode: "docs",
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTButton },
  template: '<GTButton @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Click Me!",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click Me!",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Click Me!",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Click Me!",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Click Me!",
};
