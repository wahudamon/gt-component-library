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
    <!-- <p class="mt--2 ml--20 playfair playfair--h5">Primary Input Text</p> -->
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-6">
          <GTInputText size="sm" length="sm" placeholder="Input Placeholder" />
        </div>
        <div class="grid--col-lg-6">
          <GTInputText
            size="sm"
            length="sm"
            disabled
            placeholder="Input Placeholder"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-6">
          <GTInputText size="sm" length="md" placeholder="Input Placeholder" />
        </div>
        <div class="grid--col-lg-6">
          <GTInputText
            size="sm"
            length="md"
            disabled
            placeholder="Input Placeholder"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-6">
          <GTInputText size="sm" length="lg" placeholder="Input Placeholder" />
        </div>
        <div class="grid--col-lg-6">
          <GTInputText
            size="sm"
            length="lg"
            disabled
            placeholder="Input Placeholder"
          />
        </div>
      </div>
    </div>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-6">
          <GTInputText size="md" length="sm" placeholder="Input Placeholder" />
        </div>
        <div class="grid--col-lg-6">
          <GTInputText
            size="md"
            length="sm"
            disabled
            placeholder="Input Placeholder"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-6">
          <GTInputText size="md" length="md" placeholder="Input Placeholder" />
        </div>
        <div class="grid--col-lg-6">
          <GTInputText
            size="md"
            length="md"
            disabled
            placeholder="Input Placeholder"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-6">
          <GTInputText size="md" length="lg" placeholder="Input Placeholder" />
        </div>
        <div class="grid--col-lg-6">
          <GTInputText
            size="md"
            length="lg"
            disabled
            placeholder="Input Placeholder"
          />
        </div>
      </div>
    </div>
  </div>
</template>
