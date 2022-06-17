import GTTimeline from "./GTTimeline.vue";
import GTTimelineItem from "./GTTimelineItem.vue";
import GTTimelineCard from "./GTTimelineCard.vue";

export default {
  title: "Components/GTTimeline",
  component: GTTimeline,
  subcomponents: { GTTimelineItem, GTTimelineCard },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "Timeline is a useful way to display a whole range of information and or data points to a user.",
      },
    },
  },
};

const Template = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const Primary = Template.bind({});

export const WithIcon = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="9 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="10 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="11 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="12 min ago"
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const WithSublabel = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const WithCreatedTimeIndicator = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="9 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="10 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="11 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="12 min ago"
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const LeftSideTimeline = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const CenterTimeline = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const CenterTimelineWithIcon = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          icon="gt-icons-s"
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const CenterTimelineWithSubLabel = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          subLabel="lorem ipsum"
          content="Lorem ipsum dolor sir amet."
        />
      </GTTimelineItem>
    </GTTimeline>`,
});

export const CenterTimelineWithCreatedTimeIndicator = (args) => ({
  props: Object.keys(args),
  components: {
    GTTimeline,
    GTTimelineItem,
    GTTimelineCard,
  },
  template: `
    <GTTimeline>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="9 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="10 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="right">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="11 min ago"
        />
      </GTTimelineItem>
      <GTTimelineItem orientation="left">
        <GTTimelineCard
          label="Lorem Ipsum"
          content="Lorem ipsum dolor sir amet."
          createdTime="12 min ago"
        />
      </GTTimelineItem>
    </GTTimeline>`,
});
