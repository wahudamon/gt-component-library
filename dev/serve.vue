<script>
import Vue from "vue";
import {
  GTIcon,
  GTRadioButton,
  GTRadioButtonItem,
  GTInputText,
  GTInputArea,
  GTBreadcrumb,
  GTSlider,
  GTAlert,
  GTCombobox,
  GTTab,
  GTTabItems,
  GTTabItem,
  GTTabContents,
  GTTabContentItem,
  GTTable,
  GTTableRow,
  GTTableHead,
  GTTableBody,
  GTTableHeaderCell,
  GTTableDataCell,
  GTTimeline,
  GTTimelineItem,
  GTTimelineCard,
} from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    GTIcon,
    GTRadioButton,
    GTRadioButtonItem,
    GTInputText,
    GTInputArea,
    GTBreadcrumb,
    GTSlider,
    GTAlert,
    GTCombobox,
    GTTab,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
    GTTable,
    GTTableRow,
    GTTableHead,
    GTTableBody,
    GTTableHeaderCell,
    GTTableDataCell,
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
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
        "Ferrari",
        "Mitsubishi",
        "Toyota",
        "Suzuki",
        "Supra",
        "Chevrolet",
        "Pulsar",
      ],
      comboboxEmptyOption: [],
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
      tableItems: [
        { id: "1", firstName: "Mark", lastName: "Otto", handle: "@mdo" },
        { id: "2", firstName: "Jacob", lastName: "Thornton", handle: "@fat" },
        {
          id: "3",
          firstName: "Larry",
          lastName: "Lobster",
          handle: "@twitter",
        },
      ],
      cbxSelectedItem: "",
      rbSelectedItem: "",
      sliderValue: "0",
      inputTextValue: "",
      inputAreaValue: "",
    };
  },
  watch: {
    rbSelectedItem(val) {
      console.log(val);
    },
  },
});
</script>

<template>
  <div id="app">
    <div class="mt--15 ml--15">
      <GTRadioButton type="secondary" size="md">
        <GTRadioButtonItem text="Spaghetti" value="Spaghetti" />
        <GTRadioButtonItem text="Pizza" value="Pizza" />
      </GTRadioButton>
    </div>
  </div>
</template>

<style>
@import "../css/components/style.css";
</style>
