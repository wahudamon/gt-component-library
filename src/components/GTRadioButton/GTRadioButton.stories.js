import GTRadioButton from "./GTRadioButton.vue";
import GTRadioButtonItem from "./GTRadioButtonItem.vue";

export default {
  title: "Components/GTRadioButton",
  component: GTRadioButton,
  subcomponents: { GTRadioButtonItem },
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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton, GTRadioButtonItem },
  template: `
<GTRadioButton>
  <GTRadioButtonItem
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>
  `,
});
export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: `
<GTRadioButton>
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>`,
    },
  },
};

export const Secondary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton, GTRadioButtonItem },
  template: `
<GTRadioButton>
  <GTRadioButtonItem
    type="secondary"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    type="secondary"
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>
  `,
});
Secondary.parameters = {
  docs: {
    source: {
      code: `
<GTRadioButton>
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    type="secondary"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    type="secondary"
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>`,
    },
  },
};

export const Disabled = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton, GTRadioButtonItem },
  template: `
<GTRadioButton>
  <GTRadioButtonItem
    isDisabled
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    isDisabled
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>
  `,
});
Disabled.parameters = {
  docs: {
    source: {
      code: `
<GTRadioButton>
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    isDisabled
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    isDisabled
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>`,
    },
  },
};

export const WithSubtext = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton, GTRadioButtonItem },
  template: `
<GTRadioButton>
  <GTRadioButtonItem
    text="Spaghetti"
    subtext="an Italian noodles with sauce"
    value="spaghetti"
  />
  <GTRadioButtonItem
    type="secondary"
    text="Pizza"
    subtext="an Italian roasted food with toppings"
    value="pizza"
  />
</GTRadioButton>
  `,
});
WithSubtext.parameters = {
  docs: {
    source: {
      code: `
<GTRadioButton>
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Spaghetti"
    subtext="an Italian noodles with sauce"
    value="spaghetti"
  />
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Pizza"
    subtext="an Italian roasted food with toppings"
    value="pizza"
  />
</GTRadioButton>`,
    },
  },
};

export const Small = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton, GTRadioButtonItem },
  template: `
<GTRadioButton size="sm">
  <GTRadioButtonItem
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>
  `,
});
Small.parameters = {
  docs: {
    source: {
      code: `
<GTRadioButton size="sm">
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>`,
    },
  },
};

export const Large = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTRadioButton, GTRadioButtonItem },
  template: `
<GTRadioButton size="lg">
  <GTRadioButtonItem
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>
  `,
});
Large.parameters = {
  docs: {
    source: {
      code: `
<GTRadioButton size="lg">
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTRadioButtonItem
    :model.sync="rbSelectedItem"
    text="Pizza"
    value="pizza"
  />
</GTRadioButton>`,
    },
  },
};
