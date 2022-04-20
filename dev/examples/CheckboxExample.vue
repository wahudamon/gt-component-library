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
          <GTCheckbox type="primary" size="sm" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" size="sm" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="primary"
            size="sm"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" size="md" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" size="md" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="primary"
            size="md"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" size="lg" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" size="lg" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="primary"
            size="lg"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Secondary Checkboxes</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" size="sm" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" size="sm" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="secondary"
            size="sm"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" size="md" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" size="md" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="secondary"
            size="md"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" size="lg" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="secondary" size="lg" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="secondary"
            size="lg"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
    </div>
    <p class="mt--5 ml--20 playfair playfair--h5">Disabled Checkboxes</p>
    <div class="mb--15 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" isDisabled size="sm" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" isDisabled size="sm" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="primary"
            isDisabled
            size="sm"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" isDisabled size="md" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" isDisabled size="md" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="primary"
            isDisabled
            size="md"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
      <div class="grid--row">
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" isDisabled size="lg" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox type="primary" isDisabled size="lg" text="Text" />
        </div>
        <div class="grid--col-lg-2">
          <GTCheckbox
            type="primary"
            isDisabled
            size="lg"
            text="Text"
            subtext="This is subtext"
          />
        </div>
      </div>
    </div>
  </div>
</template>
