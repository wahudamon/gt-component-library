import GTTab from "./GTTab";
import GTTabItems from "./GTTabItems";
import GTTabItem from "./GTTabItem";
import GTTabContents from "./GTTabContents";
import GTTabContentItem from "./GTTabContentItem";

const tabItemsAndContents = {
  tabItems: [
    {
      tabId: "home",
      title: "Home",
      icon: "gt-house-chimpney-s",
      isActive: true,
    },
    { tabId: "pricing", title: "Pricing", icon: "gt-inbox-s", isActive: false },
    {
      tabId: "about",
      title: "About",
      icon: "gt-address-card-s",
      isActive: false,
    },
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

export default {
  title: "Components/GTTab",
  component: GTTab,
  subcomponents: { GTTabItems, GTTabItem, GTTabContents, GTTabContentItem },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component: "Lorem ipsum dolor sir amet.",
      },
    },
  },
};

const Template = (args) => ({
  props: Object.keys(args),
  components: {
    GTTab,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
  },
  data: () => ({
    tabDatas: tabItemsAndContents,
  }),
  template: `
    <GTTab>
      <GTTabItems>
        <GTTabItem
          v-for="(tabItem, i) in tabDatas.tabItems"
          :key="i"
          :isActive="tabItem.isActive"
          :tabId="tabItem.tabId"
          :title="tabItem.title"
        />
      </GTTabItems>
      <GTTabContents>
        <GTTabContentItem
          v-for="(tabContentItem, i) in tabDatas.tabContentItems"
          :key="i"
          :isActive="tabContentItem.isActive"
          :contentId="tabContentItem.contentId"
        >
          <h1>{{ tabContentItem.contentTitle }}</h1>
          <p>{{ tabContentItem.contentText }}</p>
        </GTTabContentItem>
      </GTTabContents>
    </GTTab>`,
});

export const Primary = Template.bind({});

export const WithIcon = (args) => ({
  props: Object.keys(args),
  components: {
    GTTab,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
  },
  data: () => ({
    tabDatas: tabItemsAndContents,
  }),
  template: `
    <GTTab>
      <GTTabItems>
        <GTTabItem
          v-for="(tabItem, i) in tabDatas.tabItems"
          :key="i"
          :isActive="tabItem.isActive"
          :tabId="tabItem.tabId"
          :title="tabItem.title"
          :icon="tabItem.icon"
        />
      </GTTabItems>
    </GTTab>`,
});

export const WithPrependIcon = (args) => ({
  props: Object.keys(args),
  components: {
    GTTab,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
  },
  data: () => ({
    tabDatas: tabItemsAndContents,
  }),
  template: `
    <GTTab>
      <GTTabItems>
        <GTTabItem
          v-for="(tabItem, i) in tabDatas.tabItems"
          :key="i"
          :isActive="tabItem.isActive"
          :tabId="tabItem.tabId"
          :title="tabItem.title"
          :prependIcon="tabItem.icon"
        />
      </GTTabItems>
    </GTTab>`,
});

export const WithAppendIcon = (args) => ({
  props: Object.keys(args),
  components: {
    GTTab,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
  },
  data: () => ({
    tabDatas: tabItemsAndContents,
  }),
  template: `
    <GTTab>
      <GTTabItems>
        <GTTabItem
          v-for="(tabItem, i) in tabDatas.tabItems"
          :key="i"
          :isActive="tabItem.isActive"
          :tabId="tabItem.tabId"
          :title="tabItem.title"
          :appendIcon="tabItem.icon"
        />
      </GTTabItems>
    </GTTab>`,
});

export const WithUpperIcon = (args) => ({
  props: Object.keys(args),
  components: {
    GTTab,
    GTTabItems,
    GTTabItem,
    GTTabContents,
    GTTabContentItem,
  },
  data: () => ({
    tabDatas: tabItemsAndContents,
  }),
  template: `
    <GTTab>
      <GTTabItems>
        <GTTabItem
          v-for="(tabItem, i) in tabDatas.tabItems"
          :key="i"
          :isActive="tabItem.isActive"
          :tabId="tabItem.tabId"
          :title="tabItem.title"
          :upperIcon="tabItem.icon"
        />
      </GTTabItems>
    </GTTab>`,
});
