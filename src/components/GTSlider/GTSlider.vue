<template>
  <div class="gt-slider__container">
    <span
      v-if="valueLabel"
      id="gt-slider__value-label"
      :class="valueLabelClasses"
    >
      {{ sliderVal }}
    </span>
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
</template>

<script>
export default {
  name: "GTSlider",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    valueLabel: {
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
  },

  data() {
    return {
      sliderVal: "0",
      sliderElement: null,
      valueLabelElement: null,
    };
  },

  watch: {
    valueLabel: {
      handler() {
        setTimeout(() => {
          if (this.valueLabel) {
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
    valueLabelClasses() {
      return {
        "gt-slider__value-label": true,
        "gt-slider__value-label--disabled": this.disabled,
      };
    },
  },

  mounted() {
    this.sliderElement = document.getElementById("gt-slider__field");

    this.sliderElement.addEventListener("input", this.handleInputChange);

    this.initialTrackFill(this.sliderElement);

    if (this.valueLabel) {
      this.valueLabelElement = document.getElementById(
        "gt-slider__value-label"
      );
      this.initialValueLabelPosition(this.sliderElement);
    }
  },

  methods: {
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
          this.valueLabelElement.style.left = valueLabelPosition * 22.5 + "rem";
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

        this.valueLabelElement.innerHTML = value;

        let valueLabelPosition = value / max;

        if (value === min) {
          this.valueLabelElement.style.left = 0;
        } else {
          this.valueLabelElement.style.left = valueLabelPosition * 22.5 + "rem";
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "./GTSlider.scss";
</style>
