import GTCheckbox from "./GTCheckbox.vue";
import GTCheckboxItem from "./GTCheckboxItem.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/GTCheckbox",
  component: GTCheckbox,
  subcomponents: { GTCheckboxItem },
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
          "Checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>
  `,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};

export const Secondary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    type="secondary"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    type="secondary"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>
  `,
});
Secondary.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    type="secondary"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    type="secondary"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};

export const Disabled = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    isDisabled
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    isDisabled
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>
  `,
});
Disabled.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    isDisabled
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    isDisabled
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};

export const WithSubtext = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    subtext="an Italian noodles with sauce"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    subtext="an Italian roasted food with toppings"
    value="pizza"
  />
</GTCheckbox>
  `,
});
WithSubtext.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox>
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    subtext="an Italian noodles with sauce"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    subtext="an Italian roasted food with toppings"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};

export const Small = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox size="sm">
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>
  `,
});
Small.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox size="sm">
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};

export const Medium = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox size="md">
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>
  `,
});
Medium.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox size="md">
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};

export const Large = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GTCheckbox, GTCheckboxItem },
  template: `
<GTCheckbox size="lg">
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>
  `,
});
Large.parameters = {
  docs: {
    source: {
      code: `
<GTCheckbox size="lg">
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Spaghetti"
    value="spaghetti"
  />
  <GTCheckboxItem
    :model.sync="checkboxItems"
    text="Pizza"
    value="pizza"
  />
</GTCheckbox>`,
    },
  },
};
