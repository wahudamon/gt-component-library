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
    <div class="row g-0">
      <div v-if="actionAlign !== 'center'" class="col-md-1"></div>
      <div :class="actionClasses" style="padding: 0 1rem 1rem 1rem">
        <GTButton class="mr--2" type="primary" size="sm" text="Button" />
        <GTButton class="ml--2" type="secondary" size="sm" text="Button" />
      </div>
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
    actionButton: {
      type: Boolean,
      default: false,
    },
    actionAlign: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "center", "right"].indexOf(value) !== -1;
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
    actionClasses() {
      return {
        "col-md-11": this.actionAlign !== "center",
        "col-md-12": this.actionAlign === "center",
        [`text-${this.getActionAlign(this.actionAlign)}`]: true,
      };
    },
  },
  methods: {
    getActionAlign(alignValue) {
      switch (alignValue) {
        case "center":
          return "center";
        case "right":
          return "end";
        default:
          return "start";
      }
    },
  },
};
</script>

<style lang="scss">
@import "./GTAlert.scss";
</style>
