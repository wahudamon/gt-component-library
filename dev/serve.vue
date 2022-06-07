<script>
import Vue from "vue";
import {
  GTIcon,
  GTInputText,
  GTInputArea,
  GTBreadcrumb,
  GTAlert,
  GTCombobox,
  Tabs,
  TabItems,
  TabItem,
  TabContents,
  TabContentItem,
} from "@/entry.esm";
import GridSystem from "./examples/GridSystem.vue";
import Typography from "./examples/Typography.vue";
import ButtonsList from "./examples/ButtonsList.vue";
import CornerRadius from "./examples/CornerRadius.vue";
import CheckboxExample from "./examples/CheckboxExample.vue";
import RadioButtonExample from "./examples/RadioButtonExample.vue";
import InputTextExample from "./examples/InputTextExample.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CheckboxExample,
    RadioButtonExample,
    InputTextExample,
    GTIcon,
    GTInputText,
    GTInputArea,
    GTBreadcrumb,
    GTAlert,
    GTCombobox,
    Tabs,
    TabItems,
    TabItem,
    TabContents,
    TabContentItem,
    GridSystem,
    Typography,
    ButtonsList,
    CornerRadius,
  },
  data() {
    return {
      showAlert: true,
      crumbs: [
        { name: "Breadcrumb", path: "#" },
        { name: "Breadcrumb 2", path: "#" },
        { name: "Breadcrumb 3", path: "#" },
        { name: "Breadcrumb 4", path: "#" },
        { name: "Breadcrumb 5", path: "#" },
        { name: "Breadcrumb 6", path: "#" },
      ],
      comboboxOptions: [
        "Lamborghini",
        "Ferarri",
        "Mitsubishi",
        "Toyota",
        "Suzuki",
        "Supra",
        "Chevrolet",
        "Pulsar",
      ],
      miniCbxOptions: ["Lamborghini", "Ferarri"],
      tabItems: [
        { tabId: "home", title: "Home", isActive: true },
        { tabId: "pricing", title: "Pricing", isActive: false },
        { tabId: "about", title: "About", isActive: false },
      ],
      tabContentItems: [
        {
          contentId: "home",
          isActive: true,
          contentTitle: "Home",
          contentText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eum illo necessitatibus iusto facere quia a ratione tenetur. Facilis ratione suscipit a incidunt quae nemo aperiam nostrum ab rerum praesentium.",
        },
        {
          contentId: "pricing",
          isActive: false,
          contentTitle: "Pricing",
          contentText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda ad quae minima. Sit ad natus molestiae dolor commodi? Nesciunt ad perspiciatis error molestiae dolores at ea architecto delectus veniam.",
        },
        {
          contentId: "about",
          isActive: false,
          contentTitle: "About",
          contentText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturiatque ipsum animi totam iste nostrum earum architecto delenitiaperiam delectus aliquid sapiente quis, tempore deserunt! Sapiente amet qui deleniti dignissimos!",
        },
      ],
    };
  },
  methods: {
    clickAlertButton() {
      console.log("this button are clicked!");
    },
  },
});
</script>

<template>
  <div id="app">
    <Tabs>
      <TabItems>
        <TabItem
          v-for="(tabItem, i) in tabItems"
          :key="i"
          :isActive="tabItem.isActive"
          :tabId="tabItem.tabId"
          :title="tabItem.title"
        />
      </TabItems>
      <TabContents>
        <TabContentItem
          v-for="(tabContentItem, i) in tabContentItems"
          :key="i"
          :isActive="tabContentItem.isActive"
          :contentId="tabContentItem.contentId"
        >
          <h1>{{ tabContentItem.contentTitle }}</h1>
          <p>{{ tabContentItem.contentText }}</p>
        </TabContentItem>
      </TabContents>
    </Tabs>
  </div>
</template>

<style>
@import "../css/components/style.css";
</style>
