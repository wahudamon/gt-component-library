<script>
import { GTRadioButton } from "@/entry.esm";

export default {
  name: "radio-button-example",

  components: { GTRadioButton },
};
</script>

<template>
  <div>
    <p class="mt--10 ml--20 playfair playfair--h5">Primary Radio Buttons</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" text="Text" subtext="this is subtext" />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Secondary Radio Buttons</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="secondary"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Disabled Radio Buttons</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            isDisabled
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
    </div>
  </div>
</template>
