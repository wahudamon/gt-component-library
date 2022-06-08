<template>
  <GTTabs>
    <GTTabItems>
      <GTTabItem
        v-for="(tabItem, i) in tabItems"
        :key="i"
        :isActive="tabItem.isActive"
        :tabId="tabItem.tabId"
        :title="tabItem.title"
      />
    </GTTabItems>
    <GTTabContents>
      <GTTabContentItem
        v-for="(tabContentItem, i) in tabContentItems"
        :key="i"
        :isActive="tabContentItem.isActive"
        :contentId="tabContentItem.contentId"
      >
        <h1>{{ tabContentItem.contentTitle }}</h1>
        <p>{{ tabContentItem.contentText }}</p>
      </GTTabContentItem>
    </GTTabContents>
  </GTTabs>
</template>

<script>
import GTTabs from "./GTTabs";
import GTTabItems from "./GTTabItems";
import GTTabItem from "./GTTabItem";
import GTTabContents from "./GTTabContents";
import GTTabContentItem from "./GTTabContentItem";

export default {
  name: "GTTabExample",

  components: {
    GTTabs,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
  },

  props: {
    icon: {
      type: String,
      default: "",
    },
    upperIcon: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
    tabId: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    contentId: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
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
};
</script>
