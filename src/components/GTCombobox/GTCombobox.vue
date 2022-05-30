<template>
  <div class="combobox">
    <select name="languages" id="lang">
      <option value="select">Placeholder</option>
      <option value="javascript">JavaScript</option>
      <option value="php">PHP</option>
      <option value="java">Java</option>
      <option value="golang">Golang</option>
      <option value="python">Python</option>
      <option value="c#">C#</option>
      <option value="C++">C++</option>
      <option value="erlang">Erlang</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "GTCombobox",
};
</script>

<style lang="scss">
@import "./GTCombobox.scss";
</style>
