import GTInputText from "./GTInputText.vue";

export default {
  title: "Components/GTInputText",
  component: GTInputText,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["md"],
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
        component: "Input text defines a single-line text field.",
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
  label: "Label",
};
Primary.parameters = {
  docs: {
    source: {
      code: `<GTInputText :value.sync="inputTextValue" label="Label" />`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  length: "sm",
  label: "Label",
};
Small.parameters = {
  docs: {
    source: {
      code: `<GTInputText :value.sync="inputTextValue" length="sm" label="Label" />`,
    },
  },
};

export const Medium = Template.bind({});
Medium.args = {
  length: "md",
  label: "Label",
};
Medium.parameters = {
  docs: {
    source: {
      code: `<GTInputText :value.sync="inputTextValue" length="md" label="Label" />`,
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  length: "lg",
  label: "Label",
};
Large.parameters = {
  docs: {
    source: {
      code: `<GTInputText :value.sync="inputTextValue" length="lg" label="Label" />`,
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
      code: `<GTInputText :value.sync="inputTextValue" variant="horizontal" label="Label" placeholder="placeholder" />`,
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
      code: `<GTInputText :value.sync="inputTextValue" variant="vertical" label="Label" placeholder="placeholder" />`,
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
      code: `<GTInputText :value.sync="inputTextValue" label="Label" leadingIcon="gt-paper-plane-s" />`,
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
      code: `<GTInputText :value.sync="inputTextValue" label="Label" trailingIcon="gt-paper-plane-s" />`,
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
      code: `<GTInputText :value.sync="inputTextValue" label="Label" leadingIcon="gt-paper-plane-s" trailingIcon="gt-paper-plane-s" />`,
    },
  },
};

// export const HelperText = Template.bind({});
// HelperText.args = {
//   variant: "outline",
//   size: "sm",
//   length: "sm",
//   label: "Label",
//   helperText: "Helper Text",
// };
