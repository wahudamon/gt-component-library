import GTIcon from "./GTIcon.vue";
import libIcons from "../../lib/icons";

const availableIconsName = Object.keys(libIcons);
const availableIconsObj = libIcons;

export default {
  title: "Components/GTIcon",
  component: GTIcon,
  argTypes: {
    name: {
      name: "name",
      description: "icon's name",
      control: { type: "select" },
      options: availableIconsName,
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

export const CommunicationSolid = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'comm-solid'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="40" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});

export const CommunicationRegular = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'comm-regular'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="40" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
