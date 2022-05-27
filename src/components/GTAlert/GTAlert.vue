<template>
  <div v-if="showAlert" :class="classes" style="max-width: 600px">
    <div class="row g-0">
      <div class="col-md-1">
        <div class="card-body">
          <GTIcon
            :class="alertIconClasses"
            :name="getAlertIconName()"
            size="sm"
          />
        </div>
      </div>
      <div class="col-md-7" style="padding-top: 0.3rem">
        <div class="card-body" style="padding-bottom: 0">
          <h5 class="gt-alert__title card-title">{{ alertTitle }}</h5>
        </div>
      </div>
      <div v-if="closeIcon || linkButton" class="col-md-4">
        <div class="row g-0">
          <div
            v-if="closeIcon"
            :class="closeIconClasses"
            @click="showAlert = false"
          >
            <GTIcon
              class="mr--4 mt--2 gt-alert__close-icon"
              name="gt-xmark-s"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <div class="col-md-1"></div>
      <div class="col-md-8" style="padding-left: 1rem; padding-bottom: 1rem">
        <p class="gt-alert__content card-text">
          {{ alertContent }}
        </p>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div v-if="actionButton" class="row g-0">
      <div v-if="actionAlign !== 'center'" class="col-md-1"></div>
      <div :class="actionClasses" style="padding: 0 1rem 1rem 1rem">
        <GTButton
          class="mr--2"
          type="primary"
          size="sm"
          :text="leftButtonText"
        />
        <GTButton
          class="ml--2"
          type="secondary"
          size="sm"
          :text="rightButtonText"
        />
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
    show: {
      type: Boolean,
      default: false,
    },
    suppressed: {
      type: Boolean,
      default: false,
    },
    closeIcon: {
      type: Boolean,
      default: false,
    },
    actionButton: {
      type: Boolean,
      default: false,
    },
    leftButtonText: {
      type: String,
      default: "Button",
    },
    rightButtonText: {
      type: String,
      default: "Button",
    },
    actionAlign: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["left", "center", "right"].indexOf(value) !== -1;
      },
    },
    alertTitle: {
      type: String,
      default: "",
      required: true,
    },
    alertContent: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      showAlert: false,
    };
  },
  watch: {
    show(val) {
      this.showAlert = val;
    },
    showAlert(val) {
      this.$emit("update:show", val);
    },
  },
  computed: {
    classes() {
      return {
        "gt-alert": true,
        [`gt-alert__suppressed--${this.type}`]: this.suppressed,
        card: true,
      };
    },
    alertIconClasses() {
      return {
        "gt-alert__icon": true,
        [`gt-alert__icon--${this.type}`]: this.type,
        "ml--3": true,
      };
    },
    closeIconClasses() {
      return {
        "col-md-12": true,
        "text-end": true,
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
  mounted() {
    this.showAlert = this.show;
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
    getAlertIconName() {
      switch (this.type) {
        case "success":
          return "gt-circle-check-s";
        case "warning":
          return "gt-triangle-exclamation-s";
        case "error":
          return "gt-circle-exclamation-s";
        default:
          return "gt-circle-info-s";
      }
    },
  },
};
</script>

<style lang="scss">
@import "./GTAlert.scss";
</style>
