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
  text: "Text",
  subtext: "This is subtext",
};
Primary.parameters = {
  docs: {
    source: {
      code: `<GTRadioButton text="Text" subtext="This is subtext" />`,
    },
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
      code: `<GTRadioButton type="secondary" text="Text" subtext="This is subtext" />`,
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
      code: `<GTRadioButton isDisabled text="Text" subtext="This is subtext" />`,
    },
  },
};

export const WithoutText = Template.bind({});
WithoutText.parameters = {
  docs: {
    source: {
      code: `<GTRadioButton />`,
    },
  },
};

export const WithoutSubtext = Template.bind({});
WithoutSubtext.args = {
  text: "Text",
};
WithoutSubtext.parameters = {
  docs: {
    source: {
      code: `<GTRadioButton text="Text" />`,
    },
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
      code: `<GTRadioButton size="sm" text="Text" subtext="This is subtext" />`,
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
      code: `<GTRadioButton size="lg" text="Text" subtext="This is subtext" />`,
    },
  },
};
