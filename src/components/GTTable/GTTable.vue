<template>
  <table :class="classes">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>Lobster</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "GTTable",

  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        table: true,
        "table-sm": this.size === "sm",
        "table-hover": this.hover,
        "table-bordered": this.bordered,
        "table-borderless": !this.borderless,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTTable.scss";
</style>
