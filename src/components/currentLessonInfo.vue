<template>
  <div class="currentLessonInfo">
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
  name: "currentLessonInfo",
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
  text-align: left;
  padding-left: 0.5em;
}
#content {
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
}
.currentLessonInfo {
  margin: 2em;
  text-align: left;
  color: rgb(90, 90, 90);
}
</style>