<template>
  <li :data-tab-target="`#${tabId}`" :class="classes">
    <GTIcon
      v-if="icon && (!upperIcon || !appendIcon || !prependIcon)"
      :name="icon"
      size="sm"
    />
    <div
      v-else-if="upperIcon && (!icon || !appendIcon || !prependIcon)"
      class="tab__upper-icon"
    >
      <GTIcon :name="upperIcon" size="sm" />
      <p class="tab__text">{{ title }}</p>
    </div>
    <div v-else-if="(appendIcon || prependIcon) && (!icon || !upperIcon)">
      <div v-if="prependIcon" class="tab__with-icon">
        <GTIcon :name="prependIcon" size="sm" />
        <p class="tab__with-icon--text">{{ title }}</p>
      </div>
      <div v-else class="tab__with-icon">
        <p class="tab__with-icon--text">{{ title }}</p>
        <GTIcon :name="appendIcon" size="sm" />
      </div>
    </div>
    <p v-else class="tab__text">{{ title }}</p>
  </li>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTTabItem",
  components: { GTIcon },

  props: {
    icon: {
      type: String,
      default: "",
    },
    upperIcon: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
    tabId: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        active: this.isActive,
        tab: true,
      };
    },
  },
};
</script>
