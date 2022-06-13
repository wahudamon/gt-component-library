<template>
  <div class="wrapper">
    <div class="center-line"></div>
    <slot></slot>
    <!-- <div class="row row-right">
      <section>
        <div class="icon">
          <GTIcon name="gt-mosque-s" size="sm" />
        </div>
        <div class="details">
          <div>
            <span class="title mr--6">Label</span>
            <span>Sub-label</span>
          </div>
          <span>10 min ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus.
        </p>
      </section>
    </div>
    <div class="row row-right">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <div>
            <span class="title mr--6">Label</span>
            <span>Sub-label</span>
          </div>
          <span>9 min ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus.
        </p>
      </section>
    </div>
    <div class="row row-left">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Label</span>
          <span>8 min ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus.
        </p>
      </section>
    </div>
    <div class="row row-right">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Label</span>
          <span>7 min ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus.
        </p>
      </section>
    </div>
    <div class="row row-left">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Label</span>
          <span>6 min ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus.
        </p>
      </section>
    </div>
    <div class="row row-right">
      <section>
        <i class="icon fas fa-map-marker-alt"></i>
        <div class="details">
          <span class="title">Label</span>
          <span>5 min ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus.
        </p>
      </section>
    </div> -->
  </div>
</template>

<script>
import GTIcon from "../GTIcon/GTIcon.vue";

export default {
  name: "GTTimeline",
  components: { GTIcon },
};
</script>

<style lang="scss">
@import "./GTTimeline.scss";
</style>
