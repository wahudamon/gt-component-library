import GTCheckbox from "./GTCheckbox.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/GTCheckbox",
  component: GTCheckbox,
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
          "Checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox },
  template: '<GTCheckbox v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  text: "Text",
  subtext: "This is subtext",
};
Primary.parameters = {
  docs: {
    source: { code: `<GTCheckbox text="Text" subtext="This is subtext"  />` },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  text: "Text",
  subtext: "This is subtext",
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<GTCheckbox type="secondary" text="Text" subtext="This is subtext"  />`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Text",
  subtext: "This is subtext",
  isDisabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: `<GTCheckbox isDisabled text="Text" subtext="This is subtext"  />`,
    },
  },
};

export const WithoutText = Template.bind({});
WithoutText.parameters = {
  docs: {
    source: { code: `<GTCheckbox />` },
  },
};

export const WithoutSubtext = Template.bind({});
WithoutSubtext.args = {
  text: "Text",
};
WithoutSubtext.parameters = {
  docs: {
    source: { code: `<GTCheckbox text="Text" />` },
  },
};

export const Small = Template.bind({});
Small.args = {
  text: "Text",
  subtext: "This is subtext",
  size: "sm",
};
Small.parameters = {
  docs: {
    source: {
      code: `<GTCheckbox size="sm" text="Text" subtext="This is subtext"  />`,
    },
  },
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Text",
  subtext: "This is subtext",
  size: "md",
};
Medium.parameters = {
  docs: {
    source: {
      code: `<GTCheckbox size="md" text="Text" subtext="This is subtext"  />`,
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  text: "Text",
  subtext: "This is subtext",
  size: "lg",
};
Large.parameters = {
  docs: {
    source: {
      code: `<GTCheckbox size="lg" text="Text" subtext="This is subtext"  />`,
    },
  },
};
