<template>
  <svg
    :width="selectedSizeValue"
    :height="selectedSizeValue"
    :viewBox="selectedIcon.viewBox"
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
  },
  data() {
    return {
      selectedIcon: {},
      selectedSizeValue: "32",
    };
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

// @mixin setIconColor($color) {
//   color: $color;
//   fill: $color;
// }

$small-size: 8px;
$medium-size: 16px;
$large-size: 24px;
$extra-large-size: 32px;

// $icon-colors: (
//   "primary-navy-blue": $primary-navy-blue,
//   "primary-sea-foam": $primary-sea-foam,
//   "primary-mustard": $primary-mustard,
//   "primary-sun": $primary-sun,
//   "secondary-charcoal": $secondary-charcoal,
//   "secondary-teal": $secondary-teal,
// );

// $bg-colors: (
//   "primary-navy-blue": $primary-navy-blue,
//   "primary-sea-foam": $primary-sea-foam,
//   "primary-mustard": $primary-mustard,
//   "primary-sun": $primary-sun,
//   "secondary-charcoal": $secondary-charcoal,
//   "secondary-teal": $secondary-teal,
// );

.gt-icon {
  @include setIconSize($medium-size);
  // @include setIconColor(currentColor);

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

  // &--color {
  //   @each $name, $colorVariable in $icon-colors {
  //     &-#{$name} {
  //       @include setIconColor($colorVariable);
  //     }
  //   }
  // }

  // &--bg {
  //   @each $name, $colorVariable in $bg-colors {
  //     &-#{$name} {
  //       padding: 12px;
  //       background-color: $colorVariable;
  //       border-radius: 100%;
  //     }
  //   }
  // }
}
</style>
