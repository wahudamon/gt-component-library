<script>
import { GTInputText } from "@/entry.esm";

export default {
  name: "input-text-example",

  components: { GTInputText },
};
</script>

<template>
  <div>
    <p class="mt--10 ml--20 playfair playfair--h4">Input Text</p>
    <p class="mt--2 ml--20 playfair playfair--h5">Blablabla Input Text</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-12">
          <GTInputText />
        </div>
      </div>
    </div>
  </div>
</template>
