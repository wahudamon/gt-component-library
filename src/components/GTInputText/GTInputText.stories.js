// import GTInputText from "./GTInputText.vue";

// export default {
//   title: "Components/GTInputText",
//   component: GTInputText,
//   argTypes: {
//     size: {
//       control: { type: "select" },
//       options: ["sm", "md", "lg"],
//     },
//   },
//   parameters: {
//     viewMode: "docs",
//     docs: {
//       description: {
//         component:
//           "Radio buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.",
//       },
//     },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { GTInputText },
//   template: '<GTInputText v-bind="$props" />',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   type: "primary",
//   text: "Text",
//   subtext: "This is subtext",
//   size: "md",
//   isDisabled: false,
// };