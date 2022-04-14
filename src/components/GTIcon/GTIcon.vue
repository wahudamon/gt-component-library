<template>
  <svg
    :width="selectedSizeValue"
    :height="selectedSizeValue"
    :viewBox="selectedIcon.viewBox"
    :class="classes"
    fill="none"
  >
    <path v-bind="selectedIcon.path" />
  </svg>
</template>

<script>
import icons from "../../lib/icons";

export default {
  name: "GTIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg", "xl"].indexOf(value) !== -1;
      },
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedIcon: {},
      selectedSizeValue: "32",
    };
  },
  computed: {
    classes() {
      return {
        "gt-icon--animate": this.animate,
      };
    },
  },
  watch: {
    size: {
      handler() {
        this.getIconSize(this.size);
      },
      deep: true,
    },
  },
  mounted() {
    this.getIconByName(this.name);
    this.getIconSize(this.size);
  },
  methods: {
    getIconByName(name) {
      this.selectedIcon = {
        viewBox: icons[name].viewBox,
        path: icons[name].path,
      };
    },
    getIconSize(size) {
      switch (size) {
        case "sm":
          this.selectedSizeValue = "24";
          break;
        case "md":
          this.selectedSizeValue = "32";
          break;
        case "lg":
          this.selectedSizeValue = "40";
          break;
        case "xl":
          this.selectedSizeValue = "48";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin setIconSize($size) {
  width: $size;
  height: $size;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

$small-size: 8px;
$medium-size: 16px;
$large-size: 24px;
$extra-large-size: 32px;

.gt-icon {
  @include setIconSize($medium-size);

  display: inline-block;
  vertical-align: middle;
  stroke-width: 2px;

  &--small {
    @include setIconSize($small-size);
  }

  &--medium {
    @include setIconSize($medium-size);
  }

  &--large {
    @include setIconSize($large-size);
  }

  &--x-large {
    @include setIconSize($extra-large-size);
  }

  &--animate {
    animation-name: rotate;
    animation-duration: 750ms;
    animation-iteration-count: infinite;
  }
}
</style>
