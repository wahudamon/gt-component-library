<template>
  <li :data-tab-target="`#${tabId}`" :class="classes">
    <GTIcon name="gt-icons-s" size="sm" />
    <p class="tab__text">{{ title }}</p>
    <!-- <GTIcon v-if="icons" :name="icons" size="sm" />
    <p v-else class="tab__text">{{ title }}</p> -->
    <!-- <div class="tab__with-icon">
      <GTIcon name="gt-icons-s" size="sm" />
      <p class="tab__with-icon--text">{{ title }}</p>
      <GTIcon name="gt-icons-s" size="sm" />
    </div> -->
  </li>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "TabItem",
  components: { GTIcon },

  props: {
    icons: {
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
