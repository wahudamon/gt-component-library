<template>
  <div>
    <h1>Display Radio Buttons</h1>
    <form>
      <p>Please select your favorite Web language:</p>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label class="ml--2" for="html">HTML</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label class="ml--2" for="css">CSS</label><br />
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label class="ml--2" for="javascript">JavaScript</label>

      <p class="mt--5">Please select your age:</p>
      <input type="radio" id="age1" name="age" value="30" />
      <label class="ml--2" for="age1">0 - 30</label><br />
      <input type="radio" id="age2" name="age" value="60" />
      <label class="ml--2" for="age2">31 - 60</label><br />
      <input type="radio" id="age3" name="age" value="100" />
      <label class="ml--2" for="age3">61 - 100</label><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "radio-button-example",
};
</script>

<style lang="scss" scoped>
@import "../../css/typography";
@import "../../css/margin";
</style>
