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

export const TypeInfo = Template.bind({});
TypeInfo.args = {
  show: true,
  type: "info",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeSuccess = Template.bind({});
TypeSuccess.args = {
  show: true,
  type: "success",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeWarning = Template.bind({});
TypeWarning.args = {
  show: true,
  type: "warning",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeError = Template.bind({});
TypeError.args = {
  show: true,
  type: "error",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeInfoSuppressed = Template.bind({});
TypeInfoSuppressed.args = {
  show: true,
  suppressed: true,
  type: "info",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeSuccessSuppressed = Template.bind({});
TypeSuccessSuppressed.args = {
  show: true,
  suppressed: true,
  type: "success",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeWarningSuppressed = Template.bind({});
TypeWarningSuppressed.args = {
  show: true,
  suppressed: true,
  type: "warning",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const TypeErrorSuppressed = Template.bind({});
TypeErrorSuppressed.args = {
  show: true,
  suppressed: true,
  type: "error",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  show: true,
  closeIcon: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const WithLinkButton = Template.bind({});
WithLinkButton.args = {
  show: true,
  linkButton: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const WithLinkAndCloseButton = Template.bind({});
WithLinkAndCloseButton.args = {
  show: true,
  linkButton: true,
  closeIcon: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  show: true,
  actionButton: true,
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const WithCenterActionButton = Template.bind({});
WithCenterActionButton.args = {
  show: true,
  actionButton: true,
  actionAlign: "center",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};

export const WithRightActionButton = Template.bind({});
WithRightActionButton.args = {
  show: true,
  actionButton: true,
  actionAlign: "right",
  alertTitle: "Lorem Ipsum",
  alertContent: "Lorem ipsum dolor sir amet.",
};
