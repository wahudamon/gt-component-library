import GTSlider from "./GTSlider.vue";

export default {
  title: "Components/GTSlider",
  component: GTSlider,
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "Slider type that provided in this library are range slider. It allows you to select a value or range of values between a specified provided minimal and maximal value.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTSlider },
  template: '<GTSlider v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  min: "1",
  max: "100",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  min: "1",
  max: "100",
};

export const WithValueLabel = Template.bind({});
WithValueLabel.args = {
  valueLabel: true,
  min: "1",
  max: "100",
};

export const WithRightValueLabel = Template.bind({});
WithRightValueLabel.args = {
  rightValue: true,
  min: "1",
  max: "100",
};

export const WithLeftRightValue = Template.bind({});
WithLeftRightValue.args = {
  leftRightValue: true,
  min: "1",
  max: "100",
  prependIcon: "gt-minus-s",
  appendIcon: "gt-plus-s",
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  icons: true,
  min: "1",
  max: "100",
  prependIcon: "gt-minus-s",
  appendIcon: "gt-plus-s",
};

export const WithAppendIcon = Template.bind({});
WithAppendIcon.args = {
  showAppendIcon: true,
  min: "1",
  max: "100",
  prependIcon: "gt-minus-s",
  appendIcon: "gt-plus-s",
};
