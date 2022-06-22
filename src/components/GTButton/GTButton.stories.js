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
  text: "Click Me!",
};
Primary.parameters = {
  docs: {
    source: { code: `<GTButton @onClick="onClick" text="Click Me!" />` },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  text: "Click Me!",
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" type="secondary" text="Click Me!" />`,
    },
  },
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  text: "Click Me!",
};
Link.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" type="link" text="Click Me!" />`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  text: "Click Me!",
  size: "sm",
};
Small.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" size="sm" text="Click Me!" />`,
    },
  },
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Click Me!",
};
Medium.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" size="md" text="Click Me!" />`,
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  text: "Click Me!",
  size: "lg",
};
Large.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" size="lg" text="Click Me!" />`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Click Me!",
  isDisabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" isDisabled text="Click Me!" />`,
    },
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "gt-paper-plane-s",
};
WithIcon.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" icon="gt-paper-plane-s" />`,
    },
  },
};

export const PrependIcon = Template.bind({});
PrependIcon.args = {
  text: "Click Me!",
  icon: "gt-paper-plane-s",
  isPrependIcon: true,
};
PrependIcon.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" isPrependIcon icon="gt-paper-plane-s" text="Click Me!" />`,
    },
  },
};

export const AppendIcon = Template.bind({});
AppendIcon.args = {
  text: "Click Me!",
  icon: "gt-paper-plane-s",
  isAppendIcon: true,
};
AppendIcon.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" isAppendIcon icon="gt-paper-plane-s" text="Click Me!" />`,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.parameters = {
  docs: {
    source: {
      code: `<GTButton @onClick="onClick" isLoading />`,
    },
  },
};
