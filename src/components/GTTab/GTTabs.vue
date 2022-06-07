<template>
  <div class="tabs__container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GTTabs",

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
