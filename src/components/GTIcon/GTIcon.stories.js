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
      options: ["sm", "md", "lg", "xl"],
    },
    animate: {
      name: "animate",
      description: "icon's animation toggler",
      control: { type: "boolean" },
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
  name: "gt-address-book-r",
  size: "md",
};

export const CommunicationRegular = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'comm-regular'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});

export const CommunicationSolid = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'comm-solid'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});

export const NavigationSolid = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'nav-solid'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});

export const Buildings = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'buildings'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
