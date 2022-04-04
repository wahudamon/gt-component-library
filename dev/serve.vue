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
    <div class="sample-box--parent bg--chocolate-200 m--20">
      <div class="sample-box--child bg--mustard-400"></div>
    </div>
    <!-- <Button primary size="small" label="Hello World!" /> -->
    <!-- <div class="grid-container text-center">
      <div class="grid-row">
        <div class="grid-col-12--gu-xl bg--teal-300">1</div>
      </div>
      <div class="grid-row">
        <div class="grid-col-6--gu-xl bg--teal-300">1</div>
        <div class="grid-col-6--gu-xl bg--yellow-300">2</div>
      </div>
      <div class="grid-row">
        <div class="grid-col-4--gu-xl bg--teal-300">1</div>
        <div class="grid-col-4--gu-xl bg--yellow-300">2</div>
        <div class="grid-col-4--gu-xl bg--green-300">3</div>
      </div>
      <div class="grid-row">
        <div class="grid-col-3--gu-xl bg--teal-300">1</div>
        <div class="grid-col-3--gu-xl bg--yellow-300">2</div>
        <div class="grid-col-3--gu-xl bg--green-300">3</div>
        <div class="grid-col-3--gu-xl bg--red-300">4</div>
      </div>
      <div class="grid-row">
        <div class="grid-col-2--gu-xl bg--teal-300">1</div>
        <div class="grid-col-2--gu-xl bg--yellow-300">2</div>
        <div class="grid-col-2--gu-xl bg--green-300">3</div>
        <div class="grid-col-2--gu-xl bg--red-300">4</div>
        <div class="grid-col-2--gu-xl bg--mustard-300">5</div>
        <div class="grid-col-2--gu-xl bg--navy-blue-300">6</div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
@import "../src/styles/color";
@import "../src/styles/corner-radius";
@import "../src/styles/elevation";
@import "../src/styles/padding";
@import "../src/styles/margin";
@import "../src/styles/grid-system";

.sample-grid--container {
  display: grid;
}

.sample-box {
  &--parent {
    width: 400px;
    height: 200px;
  }
  &--child {
    width: 50px;
    height: 50px;
  }
  &--item {
    height: 50px;
  }
}
</style>
