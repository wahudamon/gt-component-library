<script>
import Vue from "vue";
import { Button } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Button,
  },
});
</script>

<template>
  <div id="app">
    <Button primary size="small" label="Hello World!" />
  </div>
</template>
