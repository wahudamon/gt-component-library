import GTTable from "./GTTable.vue";
import GTTableHead from "./GTTableHead.vue";
import GTTableBody from "./GTTableBody.vue";
import GTTableRow from "./GTTableRow.vue";
import GTTableHeaderCell from "./GTTableHeaderCell.vue";
import GTTableDataCell from "./GTTableDataCell.vue";

const tableItems = [
  { id: "1", firstName: "John", lastName: "Doe", twitter: "@john" },
  { id: "2", firstName: "Jacob", lastName: "Blazer", twitter: "@jacblazr" },
  {
    id: "3",
    firstName: "Larry",
    lastName: "Lobster",
    twitter: "@larry",
  },
];

export default {
  title: "Components/GTTable",
  component: GTTable,
  subcomponents: {
    GTTableHead,
    GTTableBody,
    GTTableRow,
    GTTableHeaderCell,
    GTTableDataCell,
  },
  parameters: {
    viewMode: "docs",
    docs: {
      description: {
        component:
          "Tables allow developers to arrange data into rows and columns.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    GTTable,
    GTTableHead,
    GTTableBody,
    GTTableRow,
    GTTableHeaderCell,
    GTTableDataCell,
  },
  data: () => ({
    items: tableItems,
  }),
  template: `
  <GTTable v-bind="$props">
    <GTTableHead>
      <GTTableRow>
        <GTTableHeaderCell>ID</GTTableHeaderCell>
        <GTTableHeaderCell>First</GTTableHeaderCell>
        <GTTableHeaderCell>Last</GTTableHeaderCell>
        <GTTableHeaderCell>Twitter</GTTableHeaderCell>
      </GTTableRow>
    </GTTableHead>
    <GTTableBody>
      <GTTableRow v-for="item in items" :key="item.id">
        <GTTableDataCell>{{ item.id }}</GTTableDataCell>
        <GTTableDataCell>{{ item.firstName }}</GTTableDataCell>
        <GTTableDataCell>{{ item.lastName }}</GTTableDataCell>
        <GTTableDataCell>{{ item.twitter }}</GTTableDataCell>
      </GTTableRow>
    </GTTableBody>
  </GTTable>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  bordered: true,
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<GTTable bordered>
  <GTTableHead>
    <GTTableRow>
      <GTTableHeaderCell>ID</GTTableHeaderCell>
      <GTTableHeaderCell>First</GTTableHeaderCell>
      <GTTableHeaderCell>Last</GTTableHeaderCell>
      <GTTableHeaderCell>Twitter</GTTableHeaderCell>
    </GTTableRow>
  </GTTableHead>
  <GTTableBody>
    <GTTableRow v-for="item in items" :key="item.id">
      <GTTableDataCell>{{ item.id }}</GTTableDataCell>
      <GTTableDataCell>{{ item.firstName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.lastName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.twitter }}</GTTableDataCell>
    </GTTableRow>
  </GTTableBody>
</GTTable>
      `,
    },
  },
};

export const SmallTable = Template.bind({});
SmallTable.args = {
  size: "sm",
  bordered: true,
};
SmallTable.parameters = {
  docs: {
    source: {
      code: `
<GTTable size="sm" bordered>
  <GTTableHead>
    <GTTableRow>
      <GTTableHeaderCell>ID</GTTableHeaderCell>
      <GTTableHeaderCell>First</GTTableHeaderCell>
      <GTTableHeaderCell>Last</GTTableHeaderCell>
      <GTTableHeaderCell>Twitter</GTTableHeaderCell>
    </GTTableRow>
  </GTTableHead>
  <GTTableBody>
    <GTTableRow v-for="item in items" :key="item.id">
      <GTTableDataCell>{{ item.id }}</GTTableDataCell>
      <GTTableDataCell>{{ item.firstName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.lastName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.twitter }}</GTTableDataCell>
    </GTTableRow>
  </GTTableBody>
</GTTable>
      `,
    },
  },
};

export const BorderlessTable = Template.bind({});
BorderlessTable.parameters = {
  docs: {
    source: {
      code: `
<GTTable>
  <GTTableHead>
    <GTTableRow>
      <GTTableHeaderCell>ID</GTTableHeaderCell>
      <GTTableHeaderCell>First</GTTableHeaderCell>
      <GTTableHeaderCell>Last</GTTableHeaderCell>
      <GTTableHeaderCell>Twitter</GTTableHeaderCell>
    </GTTableRow>
  </GTTableHead>
  <GTTableBody>
    <GTTableRow v-for="item in items" :key="item.id">
      <GTTableDataCell>{{ item.id }}</GTTableDataCell>
      <GTTableDataCell>{{ item.firstName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.lastName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.twitter }}</GTTableDataCell>
    </GTTableRow>
  </GTTableBody>
</GTTable>
      `,
    },
  },
};

export const HoverableTable = Template.bind({});
HoverableTable.args = {
  bordered: true,
  hover: true,
};
HoverableTable.parameters = {
  docs: {
    source: {
      code: `
<GTTable hover bordered>
  <GTTableHead>
    <GTTableRow>
      <GTTableHeaderCell>ID</GTTableHeaderCell>
      <GTTableHeaderCell>First</GTTableHeaderCell>
      <GTTableHeaderCell>Last</GTTableHeaderCell>
      <GTTableHeaderCell>Twitter</GTTableHeaderCell>
    </GTTableRow>
  </GTTableHead>
  <GTTableBody>
    <GTTableRow v-for="item in items" :key="item.id">
      <GTTableDataCell>{{ item.id }}</GTTableDataCell>
      <GTTableDataCell>{{ item.firstName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.lastName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.twitter }}</GTTableDataCell>
    </GTTableRow>
  </GTTableBody>
</GTTable>
      `,
    },
  },
};

export const HoverableBorderlessTable = Template.bind({});
HoverableBorderlessTable.args = {
  hover: true,
};
HoverableBorderlessTable.parameters = {
  docs: {
    source: {
      code: `
<GTTable hover>
  <GTTableHead>
    <GTTableRow>
      <GTTableHeaderCell>ID</GTTableHeaderCell>
      <GTTableHeaderCell>First</GTTableHeaderCell>
      <GTTableHeaderCell>Last</GTTableHeaderCell>
      <GTTableHeaderCell>Twitter</GTTableHeaderCell>
    </GTTableRow>
  </GTTableHead>
  <GTTableBody>
    <GTTableRow v-for="item in items" :key="item.id">
      <GTTableDataCell>{{ item.id }}</GTTableDataCell>
      <GTTableDataCell>{{ item.firstName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.lastName }}</GTTableDataCell>
      <GTTableDataCell>{{ item.twitter }}</GTTableDataCell>
    </GTTableRow>
  </GTTableBody>
</GTTable>
      `,
    },
  },
};
