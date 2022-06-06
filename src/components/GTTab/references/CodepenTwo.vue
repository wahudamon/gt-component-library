<template>
  <div>
    <h1>Material Design CSS Only Tabs</h1>
    <div class="tab-wrap">
      <input type="radio" name="tabs" id="tab1" checked />
      <div class="tab-label-content" id="tab1-content">
        <label for="tab1">Tab 1</label>
        <div class="tab-content">
          TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          laoreet eget lectus eu congue. Nam finibus urna eget nisl aliquam, in
          dictum ligula feugiat. Donec mollis ligula purus, et interdum velit
          bibendum eget. Aliquam magna diam, tristique eu libero nec, sagittis
          finibus sapien. Cras a ex ultricies, faucibus elit sagittis, maximus
          nisi. Donec quis arcu sapien. Aenean risus nibh, varius sed porttitor
          a, ornare nec leo. Sed vitae lacus in ipsum varius sagittis. Ut in
          quam cursus, ullamcorper sapien posuere, laoreet elit. Suspendisse
          interdum, risus ut ultricies scelerisque, nibh est commodo leo, sed
          tristique nisl odio et turpis. Fusce pellentesque nunc nec arcu
          feugiat accumsan. Praesent mauris sem, eleifend sit amet tortor in,
          cursus vehicula arcu. Curabitur convallis sit amet nunc ac feugiat.
          Sed at risus id diam porta pretium id vel felis. Donec nec dui id nisl
          hendrerit laoreet eu id odio.
        </div>
      </div>

      <input type="radio" name="tabs" id="tab2" />
      <div class="tab-label-content" id="tab2-content">
        <label for="tab2">Tab 2</label>
        <div class="tab-content">
          TAB 2 - Quisque egestas, purus in tempor vulputate, diam augue mollis
          quam, quis elementum ipsum ex a risus. Quisque sed augue porta,
          facilisis felis vitae, cursus mi. Nullam mollis magna eget tincidunt
          mollis. Sed suscipit placerat ultricies. Sed eget lorem et ipsum
          ultricies congue eu a enim. Nam quis ex nec lorem dignissim suscipit
          eu ut felis. Vivamus molestie felis id purus congue, vel ultrices sem
          molestie.
        </div>
      </div>

      <input type="radio" name="tabs" id="tab3" />
      <div class="tab-label-content" id="tab3-content">
        <label for="tab3">Tab 3</label>
        <div class="tab-content">
          TAB 3 - Donec vulputate ante ac ligula vestibulum, id mollis diam
          commodo. Integer at consequat magna. Sed elit sem, dictum nec
          porttitor ac, ultrices id enim. Morbi semper eros a enim malesuada, eu
          finibus erat dictum. Ut vitae orci a odio sagittis malesuada. Cras
          volutpat vel lorem in tempor. Duis ultricies lectus sit amet tellus
          vehicula faucibus. Etiam sed leo ac erat tempor feugiat at quis ipsum.
          Mauris pellentesque nisl lorem, ac finibus sapien sagittis vel. Donec
          et lobortis est. Vestibulum dignissim ligula nec erat interdum, quis
          sollicitudin metus pretium. Vestibulum quis dui sapien. Proin commodo
          justo ac orci elementum molestie. Aliquam mattis orci vitae volutpat
          commodo.
        </div>
      </div>
      <input type="radio" name="tabs" id="tab4" />
      <div class="tab-label-content" id="tab4-content">
        <label for="tab4">Tab 4</label>
        <div class="tab-content">
          TAB 4 - Quisque egestas, purus in tempor vulputate, diam augue mollis
          quam, quis elementum ipsum ex a risus. Quisque sed augue porta,
          facilisis felis vitae, cursus mi. Nullam mollis magna eget tincidunt
          mollis. Sed suscipit placerat ultricies. Sed eget lorem et ipsum
          ultricies congue eu a enim. Nam quis ex nec lorem dignissim suscipit
          eu ut felis. Vivamus molestie felis id purus congue, vel ultrices sem
          molestie.
        </div>
      </div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodepenTwo",
};
</script>

<style lang="scss">
$cyan: #00bcd4;
$yellow: #ffeb3b;
$grey: #9e9e9e;

$num-of-tabs: 4;

@mixin tabs {
  @for $i from 1 through $num-of-tabs {
    &:nth-of-type(#{$i}) {
      &:checked {
        ~ .slide {
          left: calc((100% / #{$num-of-tabs}) * #{$i - 1});
        }
      }
    }
  }
}

html,
body {
  width: 100%;
}

h1 {
  font-size: 26px;
  background: $cyan;
  color: white;
  padding: 40px 0 100px 20%;
  margin-bottom: 50px;
}

label,
p,
a,
h1,
div {
  font-family: Roboto, sans-serif;
}

.tab-wrap {
  width: 50%;
  margin-left: 20%;
  position: relative;
  display: flex;
  top: -106px;
}

input[type="radio"][name="tabs"] {
  position: absolute;
  z-index: -1;
  &:checked {
    + .tab-label-content {
      label {
        color: white;
      }
      .tab-content {
        display: block;
      }
    }
  }
  @include tabs;
  &:first-of-type {
    &:checked {
      ~ .slide {
        left: 0;
      }
    }
  }
}

label {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  background-color: $cyan;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 56px;
  transition: color 0.2s ease;
  width: 100%;
}

.slide {
  background: $yellow;
  width: calc(100% / #{$num-of-tabs});
  height: 4px;
  position: absolute;
  left: 0;
  top: calc(100% - 4px);
  transition: left 0.3s ease-out;
}

.tab-label-content {
  width: 100%;
  .tab-content {
    position: absolute;
    top: 100px;
    left: 16px;
    line-height: 130%;
    display: none;
  }
}

@media screen and (max-width: 800px) {
  h1 {
    padding: 40px 0 90px 10%;
  }
  .tab-wrap {
    width: 80%;
    margin-left: 10%;
    top: -106px;
  }
}

//---------------------------------------------

.follow {
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: #03a9f4;
  display: block;
  margin: 300px auto 0;
  white-space: nowrap;
  padding: 13px;
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);
  i {
    margin-right: 20px;
    transition: margin-right 0.2s ease;
  }
  &:hover {
    width: 134px;
    i {
      margin-right: 10px;
    }
  }
}

@media screen and (max-width: 800px) {
  .follow {
    margin: 400px auto 0;
  }
}
</style>
