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
          <GTRadioButton type="primary" size="sm" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" size="sm" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            size="sm"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" size="md" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" size="md" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            size="md"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" size="lg" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" size="lg" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            size="lg"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Secondary Radio Buttons</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" size="sm" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" size="sm" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="secondary"
            size="sm"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" size="md" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" size="md" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="secondary"
            size="md"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" size="lg" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="secondary" size="lg" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="secondary"
            size="lg"
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
          <GTRadioButton type="primary" isDisabled size="sm" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled size="sm" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            isDisabled
            size="sm"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled size="md" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled size="md" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            isDisabled
            size="md"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled size="lg" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton type="primary" isDisabled size="lg" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTRadioButton
            type="primary"
            isDisabled
            size="lg"
            text="Text"
            subtext="this is subtext"
          />
        </div>
      </div>
    </div>
  </div>
</template>
