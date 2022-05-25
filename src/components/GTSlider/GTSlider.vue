<template>
  <div class="gt-slider__container">
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
    };
  },

  mounted() {
    this.sliderElement = document.getElementById("gt-slider__field");

    if (this.sliderElement) {
      this.sliderElement.addEventListener("input", this.handleInputChange);
    }
  },

  methods: {
    handleInputChange(e) {
      let target = e.target;
      if (target) {
        const min = target.min;
        const max = target.max;
        const value = target.value;

        target.style.backgroundSize =
          ((value - min) * 100) / (max - min) + "% 100%";
      }
    },
  },
};
</script>

<style lang="scss">
@import "./GTSlider.scss";
</style>
