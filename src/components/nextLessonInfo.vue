<template>
  <div class="nextLessonInfo">
    <div>
      <span id="header">
        {{ header }}
      </span>
      <p id="content">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "nextLessonInfo",
  props: {
    header: String,
    content: null,
  },
  data: function () {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  text-align: center;
  padding-left: 0.5em;
}
#content {
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
}
</style>