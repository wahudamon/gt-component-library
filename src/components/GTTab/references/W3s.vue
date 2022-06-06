<template>
  <div class="tabs--container">
    <h2>Tabs</h2>
    <p>Click on the buttons inside the tabbed menu:</p>

    <div class="tab">
      <button class="tablinks" @click="openCity(event, 'London')">
        London
      </button>
      <button class="tablinks" @click="openCity(event, 'Paris')">Paris</button>
      <button class="tablinks" @click="openCity(event, 'Tokyo')">Tokyo</button>
    </div>

    <div id="london" class="tabcontent">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>
    <div id="paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital city of France.</p>
    </div>
    <div id="tokyo" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital city of Japan.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "W3s",

  methods: {
    openCity(evt, cityName) {
      let tabcontents, tablinks;

      tabcontents = document.getElementsByClassName("tabcontent");
      tabcontents.forEach((tabcontent) => {
        tabcontent.style.display = "none";
      });

      tablinks = document.getElementsByClassName("tablinks");
      tablinks.forEach((tablink) => {
        tablink.className = tablink.className.replace("active", "");
      });

      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
};
</script>

<style lang="scss">
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;

  button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;

    &:hover {
      background-color: #ddd;
    }

    &.active {
      background-color: #ccc;
    }
  }
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
