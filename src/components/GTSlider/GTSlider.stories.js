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
Primary.parameters = {
  docs: {
    source: {
      code: `<GTSlider min="1" max="100" />`,
    },
  },
};
