<template>
  <div :class="sliderContainerClasses">
    <div>
      <!-- <span
        v-if="upperLabel"
        id="gt-slider__value-label"
        :class="valueLabelClasses"
      >
        {{ sliderVal }}
      </span> -->
      <input
        v-model="sliderVal"
        class="gt-slider__field"
        id="gt-slider__field"
        type="range"
        :min="min"
        :max="max"
        :disabled="disabled"
      />
    </div>
    <div v-if="rightLabel || showAppendIcon" class="ml--4">
      <GTIcon
        v-if="showAppendIcon && !rightLabel"
        :class="sliderIconsClasses"
        :name="appendIcon"
        size="sm"
      />
      <span
        v-if="rightLabel && !showAppendIcon && !upperLabel"
        :class="valueLabelClasses"
      >
        {{ sliderVal }}
      </span>
    </div>
  </div>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTSlider",

  components: { GTIcon },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    upperLabel: {
      type: Boolean,
      default: false,
    },
    rightLabel: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: "0",
      required: true,
    },
    max: {
      type: String,
      default: "0",
      required: true,
    },
    value: {
      type: String,
      default: "0",
      required: true,
    },
    showAppendIcon: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: String,
      default: "gt-icons-s",
    },
  },

  data() {
    return {
      sliderVal: this.value,
      sliderElement: null,
      valueLabelElement: null,
    };
  },

  watch: {
    sliderVal(val) {
      this.sendValueToParent(val);
    },
    upperLabel: {
      handler() {
        setTimeout(() => {
          if (this.upperLabel) {
            this.sliderElement = document.getElementById("gt-slider__field");

            this.valueLabelElement = document.getElementById(
              "gt-slider__value-label"
            );

            this.sliderElement.addEventListener(
              "input",
              this.handleInputChange
            );
          }
        }, 500);
      },
      deep: true,
    },
  },

  computed: {
    sliderContainerClasses() {
      return {
        "gt-slider__container": true,
        "align-items-center": !this.upperLabel,
        "align-items-end": this.upperLabel,
      };
    },
    valueLabelClasses() {
      return {
        "gt-slider__value-label": this.upperLabel,
        "gt-slider__value-label-right": this.rightLabel,
        "gt-slider__value-label--disabled": this.disabled,
      };
    },
    sliderIconsClasses() {
      return {
        "gt-slider__icons": true,
        "gt-slider__icons--disabled": this.disabled,
      };
    },
  },

  mounted() {
    if (this.sliderVal < this.min) this.sliderVal = this.min;

    this.sliderElement = document.getElementById("gt-slider__field");

    this.sliderElement.addEventListener("input", this.handleInputChange);

    this.initialTrackFill(this.sliderElement);

    if (this.upperLabel) {
      this.valueLabelElement = document.getElementById(
        "gt-slider__value-label"
      );
      this.initialValueLabelPosition(this.sliderElement);
    }
  },

  methods: {
    sendValueToParent(value) {
      this.$emit("update:value", value);
    },
    initialTrackFill(element) {
      if (element) {
        const min = element.min;
        const max = element.max;
        const value = element.value;

        element.style.backgroundSize =
          ((value - min) * 100) / (max - min) + "% 100%";
      }
    },

    initialValueLabelPosition(slider) {
      if (slider) {
        const min = slider.min;
        const max = slider.max;
        const value = slider.value;

        this.valueLabelElement.innerHTML = value;

        let valueLabelPosition = value / max;

        if (value === min) {
          this.valueLabelElement.style.left = 0;
        } else {
          this.valueLabelElement.style.left = valueLabelPosition * 21.5 + "rem";
        }
      }
    },

    handleInputChange(e) {
      let target = e.target;

      if (target) {
        const min = target.min;
        const max = target.max;
        const value = target.value;

        target.style.backgroundSize =
          ((value - min) * 100) / (max - min) + "% 100%";

        if (this.upperLabel) {
          this.valueLabelElement.innerHTML = value;

          let valueLabelPosition = value / max;

          if (value === min) {
            this.valueLabelElement.style.left = 0;
          } else {
            this.valueLabelElement.style.left =
              valueLabelPosition * 21.5 + "rem";
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "./GTSlider.scss";
</style>
