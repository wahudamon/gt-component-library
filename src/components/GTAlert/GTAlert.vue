<template>
  <div :class="classes" style="width: 600px">
    <div class="row g-0">
      <div class="col-md-1 text-end">
        <div class="card-body">
          <GTIcon name="gt-house-chimpney-s" size="sm" />
        </div>
      </div>
      <div class="col-md-7" style="padding-top: 0.3rem">
        <div class="card-body" style="padding-bottom: 0">
          <h5 class="gt-alert__title card-title">Informational Alert</h5>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row g-0">
          <div class="col-md-8 text-end">
            <GTButton type="link" size="sm" text="Button" />
          </div>
          <div class="col-md-4 text-end">
            <GTIcon class="mr--4 mt--2" name="gt-comment-r" size="sm" />
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <div class="col-md-1"></div>
      <div class="col-md-8" style="padding-left: 1rem; padding-bottom: 1rem">
        <p class="gt-alert__content card-text">
          Explain how to resolve the issue by including any troubleshooting
          actions or next steps.
        </p>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";
import GTButton from "../GTButton/GTButton.vue";

export default {
  name: "GTAlert",
  components: { GTIcon, GTButton },
  props: {
    type: {
      type: String,
      default: "info",
      validator: function (value) {
        return ["info", "warning", "danger", "success"].indexOf(value) !== -1;
      },
    },
    suppressed: {
      type: Boolean,
      default: false,
    },
    closeIcon: {
      type: Boolean,
      default: false,
    },
    ghostButton: {
      type: Boolean,
      default: false,
    },
    alertAction: {
      type: Boolean,
      default: false,
    },
    alertActionAlign: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        card: true,
        "gt-alert": true,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./GTAlert.scss";
</style>
