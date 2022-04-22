import GTButton from "./GTButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/GTButton",
  component: GTButton,
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
          "Buttons are used to initialize an action. Button text express what action will occur when the user interacts with it.",
      },
    },
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
  type: "primary",
  text: "Click Me!",
  size: "md",
  icon: "",
  isDisabled: false,
  isPrependIcon: false,
  isAppendIcon: false,
  isLoading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  text: "Click Me!",
  size: "md",
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  text: "Click Me!",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  text: "Click Me!",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Click Me!",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  text: "Click Me!",
  size: "lg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Click Me!",
  size: "md",
  isDisabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "gt-paper-plane-s",
  size: "md",
};

export const PrependIcon = Template.bind({});
PrependIcon.args = {
  text: "Click Me!",
  icon: "gt-paper-plane-s",
  isPrependIcon: true,
  size: "md",
};

export const AppendIcon = Template.bind({});
AppendIcon.args = {
  text: "Click Me!",
  icon: "gt-paper-plane-s",
  isAppendIcon: true,
  size: "md",
};

export const Loading = Template.bind({});
Loading.args = {
  size: "md",
  isLoading: true,
};
