<template>
  <div>
    <h1>Show Checkboxes</h1>
    <form>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label class="ml--2" for="vehicle1"> I have a bike</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label class="ml--2" for="vehicle2"> I have a car</label><br />
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
      <label class="ml--2" for="vehicle3"> I have a boat</label><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "checkbox-example",
};
</script>

<style lang="scss" scoped>
@import "../../css/typography";
@import "../../css/margin";
</style>
