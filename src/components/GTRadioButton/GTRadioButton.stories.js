import GTRadioButton from "./GTRadioButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/GTRadioButton",
  component: GTRadioButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "Radio buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton },
  template: '<GTRadioButton v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: "primary",
  text: "Text",
  subtext: "This is subtext",
  size: "md",
  isDisabled: false,
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  type: "primary",
  size: "md",
};

export const WithoutSubtext = Template.bind({});
WithoutSubtext.args = {
  type: "primary",
  text: "Text",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  type: "primary",
  text: "Text",
  subtext: "This is subtext",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "primary",
  text: "Text",
  subtext: "This is subtext",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  type: "primary",
  text: "Text",
  subtext: "This is subtext",
  size: "lg",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  text: "Text",
  subtext: "This is subtext",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  text: "Text",
  subtext: "This is subtext",
  size: "md",
  isDisabled: true,
};
