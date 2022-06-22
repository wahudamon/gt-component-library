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
  label: "Label",
};
Primary.parameters = {
  docs: {
    source: {
      code: `<GTInputArea label="Label" />`,
    },
  },
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  size: "md",
  label: "Label",
};

MediumSize.parameters = {
  docs: {
    source: {
      code: `<GTInputArea size="md" label="Label" />`,
    },
  },
};

export const MediumLength = Template.bind({});
MediumLength.args = {
  length: "md",
  label: "Label",
};
MediumLength.parameters = {
  docs: {
    source: {
      code: `<GTInputArea length="md" label="Label" />`,
    },
  },
};

export const LargeLength = Template.bind({});
LargeLength.args = {
  variant: "outline",
  size: "sm",
  length: "lg",
  label: "Label",
};
LargeLength.parameters = {
  docs: {
    source: {
      code: `<GTInputArea length="lg" label="Label" />`,
    },
  },
};

export const HorizontalLabel = Template.bind({});
HorizontalLabel.args = {
  variant: "horizontal",
  label: "Label",
  placeholder: "placeholder",
};
HorizontalLabel.parameters = {
  docs: {
    source: {
      code: `<GTInputArea variant="horizontal" label="Label" placeholder="placeholder" />`,
    },
  },
};

export const VerticalLabel = Template.bind({});
VerticalLabel.args = {
  variant: "vertical",
  label: "Label",
  placeholder: "placeholder",
};
VerticalLabel.parameters = {
  docs: {
    source: {
      code: `<GTInputArea variant="vertical" label="Label" placeholder="placeholder" />`,
    },
  },
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: "Label",
  helperText: "Helper Text",
};
HelperText.parameters = {
  docs: {
    source: {
      code: `<GTInputArea label="Label" placeholder="placeholder" helperText="Helper Text" />`,
    },
  },
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  label: "Label",
  leadingIcon: "gt-paper-plane-s",
};
LeadingIcon.parameters = {
  docs: {
    source: {
      code: `<GTInputArea label="Label" leadingIcon="gt-paper-plane-s" />`,
    },
  },
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  label: "Label",
  trailingIcon: "gt-paper-plane-s",
};
TrailingIcon.parameters = {
  docs: {
    source: {
      code: `<GTInputArea label="Label" trailingIcon="gt-paper-plane-s" />`,
    },
  },
};

export const LeadingAndTrailingIcon = Template.bind({});
LeadingAndTrailingIcon.args = {
  label: "Label",
  leadingIcon: "gt-paper-plane-s",
  trailingIcon: "gt-paper-plane-s",
};
LeadingAndTrailingIcon.parameters = {
  docs: {
    source: {
      code: `<GTInputArea label="Label" leadingIcon="gt-paper-plane-s" trailingIcon="gt-paper-plane-s" />`,
    },
  },
};
