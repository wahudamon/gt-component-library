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
    <!-- <div class="sample-box--child m--20 cr--sm bg--chocolate-400"></div> -->

    <!-- <div class="sample-box--parent bg--chocolate-200 m--20">
      <div class="sample-box--child bg--mustard-400"></div>
    </div> -->

    <!-- <p class="playfair playfair--overline">Lorem ipsum, dolor sit amet.</p> -->
    <!-- <Button primary size="small" label="Hello World!" /> -->
    <div class="grid-container text-center mt--20">
      <!-- <div class="grid-row">
        <div class="grid--col-lg-12--gu-xl bg--teal-300">1</div>
      </div> -->
      <div class="grid-row">
        <div class="grid--col-sm-2--gu-xl bg--teal-300">Phone</div>
        <div class="grid--col-sm-2--gu-xl bg--yellow-300">Phone</div>
      </div>
      <!-- <div class="grid-row">
        <div class="grid--col-lg-4--gu-xl bg--teal-300">1</div>
        <div class="grid--col-lg-4--gu-xl bg--yellow-300">2</div>
        <div class="grid--col-lg-4--gu-xl bg--green-300">3</div>
      </div> -->
      <div class="grid-row">
        <div class="grid--col-md-2--gu-xl bg--teal-300">Tablet</div>
        <div class="grid--col-md-2--gu-xl bg--yellow-300">Tablet</div>
        <div class="grid--col-md-2--gu-xl bg--green-300">Tablet</div>
        <div class="grid--col-md-2--gu-xl bg--red-300">Tablet</div>
      </div>
      <div class="grid-row">
        <div class="grid--col-lg-2--gu-xl bg--teal-300">Desktop</div>
        <div class="grid--col-lg-2--gu-xl bg--yellow-300">Desktop</div>
        <div class="grid--col-lg-2--gu-xl bg--green-300">Desktop</div>
        <div class="grid--col-lg-2--gu-xl bg--red-300">Desktop</div>
        <div class="grid--col-lg-2--gu-xl bg--mustard-300">Desktop</div>
        <div class="grid--col-lg-2--gu-xl bg--navy-blue-300">Desktop</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../src/styles/color";
@import "../src/styles/typography";
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
