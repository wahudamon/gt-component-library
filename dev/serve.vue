<script>
import Vue from "vue";
// import { Button } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  // components: {
  //   Button,
  // },
});
</script>

<template>
  <div id="app">
    <!-- <Button primary size="small" label="Hello World!" /> -->
    <div
      class="sample-box cr--lg bottom-elevation--high bg--navy-blue-300"
    ></div>
  </div>
</template>

<style lang="scss">
@import "../src/styles/color";
@import "../src/styles/corner-radius";
@import "../src/styles/elevation";

.sample-box {
  margin-top: 50px;
  margin-left: 530px;
  width: 400px;
  height: 200px;
}
</style>
