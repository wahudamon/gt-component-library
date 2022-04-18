<script>
import Vue from "vue";
import { GTButton } from "@/entry.esm";

export default Vue.extend({
  name: "ButtonsList",
  components: {
    GTButton,
  },
});
</script>

<template>
  <div>
    <p class="mt--10 ml--20 playfair playfair--h3">Primary Buttons</p>
    <div class="mt--5 grid--container">
      <div class="grid--row">
        <div class="grid--col-lg-12">
          <GTButton primary size="sm" text="Button" />
          <GTButton class="ml--5" isDisabled primary size="sm" text="Button" />
          <GTButton class="ml--5" primary size="sm" icon="gt-paper-plane-s" />
          <GTButton
            class="ml--5"
            isDisabled
            primary
            size="sm"
            icon="gt-paper-plane-s"
          />
          <GTButton
            class="ml--5"
            primary
            size="sm"
            isPrependIcon
            icon="gt-paper-plane-s"
            text="Button"
          />
          <GTButton
            class="ml--5"
            primary
            size="sm"
            isAppendIcon
            icon="gt-paper-plane-s"
            text="Button"
          />
          <GTButton class="ml--5" primary isLoading size="sm" />
        </div>
        <div class="grid--col-lg-12">
          <GTButton primary size="md" text="Button" />
          <GTButton class="ml--5" isDisabled primary size="md" text="Button" />
          <GTButton class="ml--5" primary size="md" icon="gt-paper-plane-s" />
          <GTButton
            class="ml--5"
            isDisabled
            primary
            size="md"
            icon="gt-paper-plane-s"
          />
          <GTButton
            class="ml--5"
            primary
            size="md"
            isPrependIcon
            icon="gt-paper-plane-s"
            text="Button"
          />
          <GTButton
            class="ml--5"
            primary
            size="md"
            isAppendIcon
            icon="gt-paper-plane-s"
            text="Button"
          />
          <GTButton class="ml--5" primary isLoading size="md" />
        </div>
        <div class="grid--col-lg-12">
          <GTButton primary size="lg" text="Button" />
          <GTButton class="ml--5" isDisabled primary size="lg" text="Button" />
          <GTButton class="ml--5" primary size="lg" icon="gt-paper-plane-s" />
          <GTButton
            class="ml--5"
            isDisabled
            primary
            size="lg"
            icon="gt-paper-plane-s"
          />
          <GTButton
            class="ml--5"
            primary
            size="lg"
            isPrependIcon
            icon="gt-paper-plane-s"
            text="Button"
          />
        </div>
        <div class="grid--row">
          <div class="grid--col-lg-12">
            <GTButton
              primary
              size="lg"
              isAppendIcon
              icon="gt-paper-plane-s"
              text="Button"
            />
            <GTButton class="ml--5" primary isLoading size="lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
