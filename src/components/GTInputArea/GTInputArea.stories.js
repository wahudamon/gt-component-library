import GTInputArea from "./GTInputArea.vue";

export default {
  title: "Components/GTInputArea",
  component: GTInputArea,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    length: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["outline", "horizontal", "vertical"],
    },
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component: "Input area defines a multi-line text input control.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTInputArea },
  template: '<GTInputArea v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  variant: "outline",
  size: "md",
  length: "sm",
  label: "Label",
};

export const SmallLength = Template.bind({});
SmallLength.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
};

export const MediumLength = Template.bind({});
MediumLength.args = {
  variant: "outline",
  size: "sm",
  length: "md",
  label: "Label",
};

export const LargeLength = Template.bind({});
LargeLength.args = {
  variant: "outline",
  size: "sm",
  length: "lg",
  label: "Label",
};

export const HorizontalLabel = Template.bind({});
HorizontalLabel.args = {
  variant: "horizontal",
  size: "sm",
  length: "sm",
  label: "Label",
  placeholder: "placeholder",
};

export const VerticalLabel = Template.bind({});
VerticalLabel.args = {
  variant: "vertical",
  size: "sm",
  length: "sm",
  label: "Label",
  placeholder: "placeholder",
};

export const HelperText = Template.bind({});
HelperText.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
  helperText: "Helper Text",
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
  leadingIcon: "gt-paper-plane-s",
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
  trailingIcon: "gt-paper-plane-s",
};

export const LeadingAndTrailingIcon = Template.bind({});
LeadingAndTrailingIcon.args = {
  variant: "outline",
  size: "sm",
  length: "sm",
  label: "Label",
  leadingIcon: "gt-paper-plane-s",
  trailingIcon: "gt-paper-plane-s",
};
