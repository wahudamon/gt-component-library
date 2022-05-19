import GTBreadcrumb from "./GTBreadcrumb.vue";

const crumbsData = [
  { name: "Breadcrumb", path: "#" },
  { name: "Breadcrumb 2", path: "#" },
  { name: "Breadcrumb 3", path: "#" },
];

const moreCrumbsData = [
  { name: "Breadcrumb", path: "#" },
  { name: "Breadcrumb 2", path: "#" },
  { name: "Breadcrumb 3", path: "#" },
  { name: "Breadcrumb 4", path: "#" },
  { name: "Breadcrumb 5", path: "#" },
  { name: "Breadcrumb 6", path: "#" },
];

export default {
  title: "Components/GTBreadcrumb",
  component: GTBreadcrumb,
  argTypes: {
    separatorSign: {
      control: { type: "select" },
      options: ["/", "-", "|", ">"],
    },
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "Breadcrumb navigation usually located at the top of the webpage and tells the user exactly what pages they've been on and how they have ended up where they are.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTBreadcrumb },
  template: '<GTBreadcrumb v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  crumbs: crumbsData,
  separatorSign: "/",
};

export const MoreThanFourCrumbs = Template.bind({});
MoreThanFourCrumbs.args = {
  crumbs: moreCrumbsData,
  separatorSign: "/",
};

export const WithPipeSeparator = Template.bind({});
WithPipeSeparator.args = {
  crumbs: crumbsData,
  separatorSign: "|",
};

export const WithMinusSeparator = Template.bind({});
WithMinusSeparator.args = {
  crumbs: crumbsData,
  separatorSign: "-",
};

export const WithAngleBracketSeparator = Template.bind({});
WithAngleBracketSeparator.args = {
  crumbs: crumbsData,
  separatorSign: ">",
};

export const WithHomeIcon = Template.bind({});
WithHomeIcon.args = {
  crumbs: crumbsData,
  separatorSign: "/",
  homeIcon: true,
};
