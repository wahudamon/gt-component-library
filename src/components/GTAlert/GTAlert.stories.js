import GTAlert from "./GTAlert.vue";

export default {
  title: "Components/GTAlert",
  component: GTAlert,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "warning", "danger", "success"],
    },
    actionAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "Alert usually located at the top of the webpage and tells the user exactly what pages they've been on and how they have ended up where they are.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTAlert },
  template: '<GTAlert v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  show: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
Primary.parameters = {
  docs: {
    source: {
      code: `<GTAlert show alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeInfo = Template.bind({});
TypeInfo.args = {
  show: true,
  type: "info",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeInfo.parameters = {
  docs: {
    source: {
      code: `<GTAlert show type="info" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeSuccess = Template.bind({});
TypeSuccess.args = {
  show: true,
  type: "success",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeSuccess.parameters = {
  docs: {
    source: {
      code: `<GTAlert show type="success" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeWarning = Template.bind({});
TypeWarning.args = {
  show: true,
  type: "warning",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeWarning.parameters = {
  docs: {
    source: {
      code: `<GTAlert show type="warning" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeError = Template.bind({});
TypeError.args = {
  show: true,
  type: "error",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeError.parameters = {
  docs: {
    source: {
      code: `<GTAlert show type="error" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeInfoSuppressed = Template.bind({});
TypeInfoSuppressed.args = {
  show: true,
  suppressed: true,
  type: "info",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeInfoSuppressed.parameters = {
  docs: {
    source: {
      code: `<GTAlert show suppressed type="info" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeSuccessSuppressed = Template.bind({});
TypeSuccessSuppressed.args = {
  show: true,
  suppressed: true,
  type: "success",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeSuccessSuppressed.parameters = {
  docs: {
    source: {
      code: `<GTAlert show suppressed type="success" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeWarningSuppressed = Template.bind({});
TypeWarningSuppressed.args = {
  show: true,
  suppressed: true,
  type: "warning",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeWarningSuppressed.parameters = {
  docs: {
    source: {
      code: `<GTAlert show suppressed type="warning" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const TypeErrorSuppressed = Template.bind({});
TypeErrorSuppressed.args = {
  show: true,
  suppressed: true,
  type: "error",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
TypeErrorSuppressed.parameters = {
  docs: {
    source: {
      code: `<GTAlert show suppressed type="error" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  show: true,
  closeIcon: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
WithCloseButton.parameters = {
  docs: {
    source: {
      code: `<GTAlert show closeIcon alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." />`,
    },
  },
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  show: true,
  actionButton: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
  leftButtonText: "Yes",
  rightButtonText: "No",
};
WithActionButton.parameters = {
  docs: {
    source: {
      code: `<GTAlert show actionButton alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." leftButtonText="Yes" rightButtonText="No" :leftButtonFunction="functionName" :rightButtonFunction="functionName" />`,
    },
  },
};

export const WithCenterActionButton = Template.bind({});
WithCenterActionButton.args = {
  show: true,
  actionButton: true,
  actionAlign: "center",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
  leftButtonText: "Yes",
  rightButtonText: "No",
};
WithCenterActionButton.parameters = {
  docs: {
    source: {
      code: `<GTAlert show actionButton actionAlign="center" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." leftButtonText="Yes" rightButtonText="No" :leftButtonFunction="functionName" :rightButtonFunction="functionName" />`,
    },
  },
};

export const WithRightActionButton = Template.bind({});
WithRightActionButton.args = {
  show: true,
  actionButton: true,
  actionAlign: "right",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
  leftButtonText: "Yes",
  rightButtonText: "No",
};
WithRightActionButton.parameters = {
  docs: {
    source: {
      code: `<GTAlert show actionButton actionAlign="right" alertTitle="Lorem Ipsum" alertContent="Lorem ipsum dolor sir amet." leftButtonText="Yes" rightButtonText="No" :leftButtonFunction="functionName" :rightButtonFunction="functionName" />`,
    },
  },
};
