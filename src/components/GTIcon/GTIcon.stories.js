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
  name: "gt-meteor-s",
  size: "md",
};
Primary.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="gt-meteor-s" size="md" />`,
    },
  },
};

export const AccessibilityIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'accessibility'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
AccessibilityIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const AstronomyIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'astronomy'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
AstronomyIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const AutomotiveIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'automotive'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
AutomotiveIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const BuildingIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'building'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
BuildingIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const CommunicationIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'communication'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
CommunicationIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const ConnectivityIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'connectivity'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
ConnectivityIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const EditingIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'editing'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
EditingIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const NavigationIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'navigation'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
NavigationIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};

export const SymbolIcons = (args) => ({
  props: Object.keys(args),
  components: { GTIcon },
  data: () => ({
    icons: availableIconsObj,
  }),
  template: `
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div
        v-for="(icon, index) in icons"
        v-if="icon.type == 'symbol'"
        :key="index"
        style="text-align: center; padding: 2rem"
      >
        <GTIcon :name="icon.name" size="lg" />
        <p> {{ icon.name }} </p>
      </div>
    </div>
  `,
});
SymbolIcons.parameters = {
  docs: {
    source: {
      code: `<GTIcon name="" size="md" />`,
    },
  },
};
