<template>
  <div class="gt-slider__container">
    <span id="gt-slider__value-label" class="gt-slider__value-label">
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
      @input="handleInputChange"
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
      sliderVal: "50",
      sliderElement: null,
      valueLabelElement: null,
    };
  },

  mounted() {
    this.sliderElement = document.getElementById("gt-slider__field");
    this.valueLabelElement = document.getElementById("gt-slider__value-label");

    this.initialTrackFill(this.sliderElement);
    this.initialValueLabelPosition(this.sliderElement);
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
