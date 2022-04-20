<script>
import { GTCheckbox } from "@/entry.esm";

export default {
  name: "checkbox-example",

  components: { GTCheckbox },
};
</script>

<template>
  <div>
    <p class="mt--10 ml--20 playfair playfair--h5">Primary Checkboxes</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" text="Text" subtext="This is subtext" />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Secondary Checkboxes</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" text="Text" subtext="This is subtext" />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Disabled Checkboxes</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox isDisabled text="Text" subtext="This is subtext" />
        </div>
      </div>
    </div>
  </div>
</template>
