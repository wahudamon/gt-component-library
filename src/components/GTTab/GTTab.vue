<template>
  <div class="tabs__container">
    <ul class="tabs__field">
      <li data-tab-target="#home" class="active tab">
        <GTIcon v-if="icons" :name="icons" size="sm" />
        <!-- <p v-else class="tab__text">Home</p> -->
        <div class="tab__with-icon">
          <GTIcon name="gt-icons-s" size="sm" />
          <p class="tab__with-icon--text">Home</p>
          <GTIcon name="gt-icons-s" size="sm" />
        </div>
      </li>
      <li data-tab-target="#pricing" class="tab">
        <GTIcon v-if="icons" :name="icons" size="sm" />
        <!-- <p v-else class="tab__text">Pricing</p> -->
        <div class="tab__with-icon">
          <GTIcon name="gt-icons-s" size="sm" />
          <p class="tab__with-icon--text">Pricing</p>
          <GTIcon name="gt-icons-s" size="sm" />
        </div>
      </li>
      <li data-tab-target="#about" class="tab">
        <GTIcon v-if="icons" :name="icons" size="sm" />
        <!-- <p v-else class="tab__text">About</p> -->
        <div class="tab__with-icon">
          <GTIcon name="gt-icons-s" size="sm" />
          <p class="tab__with-icon--text">About</p>
          <GTIcon name="gt-icons-s" size="sm" />
        </div>
      </li>
    </ul>

    <div class="tab-content">
      <div id="home" data-tab-content class="active">
        <h1>Home</h1>
        <p>This is the home.</p>
      </div>
      <div id="pricing" data-tab-content>
        <h1>Home</h1>
        <p>Some information on pricing.</p>
      </div>
      <div id="about" data-tab-content>
        <h1>About</h1>
        <p>Let me tell you about me.</p>
      </div>
    </div>
  </div>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTTab",

  components: { GTIcon },

  props: {
    icons: {
      type: String,
      default: "",
    },
  },

  mounted() {
    this.addTabsEvent();
  },

  methods: {
    addTabsEvent() {
      const tabs = document.querySelectorAll("[data-tab-target]");
      const tabContents = document.querySelectorAll("[data-tab-content]");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = document.querySelector(tab.dataset.tabTarget);
          tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
          });
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          tab.classList.add("active");
          target.classList.add("active");
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "./GTTab.scss";
</style>
