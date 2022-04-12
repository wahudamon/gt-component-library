import GTIcon from "./GTIcon.vue";
import libIcons from "../../lib/icons";

const availableIcons = Object.keys(libIcons);

export default {
  title: "Components/GTIcon",
  component: GTIcon,
  argTypes: {
    name: {
      name: "name",
      description: "icon's name",
      control: { type: "select" },
      options: availableIcons,
    },
    size: {
      name: "size",
      description: "icon's size",
      control: { type: "select" },
      options: ["40", "60", "80"],
    },
  },
  parameters: {
    viewMode: "docs",
  },
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  template: '<GTIcon v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  name: "gt-add-block",
  size: "40",
};

export const AllIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: [...availableIcons],
  }),
  template: `
  <div>
    <p style="font-size: 20px; padding-left: 20px; margin: 0;"> All icons </p>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div
        v-for="(name, index) in icons"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon v-bind="{ name }" size="40" />
        <p> {{ name }} </p>
      </div>
    </div>
  </div>
  `,
});
