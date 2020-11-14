<template>
  <div class="box">
    <div id="main" class="lesson">
      <div id="texts">
        <span id="header">{{ msg.name }}</span>
        <p v-if="isStart" id="time">
          {{ thisLessonRemainingTime }}
        </p>
      </div>
    </div>
    <h5>
      <span class="badge badge-pill badge-light">{{ now }}</span>
    </h5>
  </div>
</template>
<script>
export default {
  name: "box",
  props: {
    msg: Object,
    isStart: Boolean,
  },
  data: function () {
    return {
      thisLessonRemainingTime: null,
      now: null,
    };
  },
  methods: {
    getTime: function () {
      var time = new Date();
      return `${time.getHours()}:${
        time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes()
      }.${time.getSeconds()}`;
    },
    setLessonTime: function () {
      var time = new Date();
      var hour = (this.msg.startAt.getHours() - time.getHours()) * -1;
      var minute = this.msg.startAt.getMinutes() - time.getMinutes();

      hour = hour < 0 ? hour : 24 - hour;
      if (minute < 0) {
        minute = 60 + minute;
        hour -= 1;
      }

      var display = `${hour}s ${minute}dk`;
      return display;
    },
  },
  mounted: function () {
    var that = this;
    setInterval(() => {
      that.now = that.getTime();
      that.thisLessonRemainingTime = that.setLessonTime();
      if (that.isStart) {
        document.querySelector("#main").className = "lesson active";
      } else {
        document.querySelector("#main").className = "lesson";
      }
    }, 500);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
}
.lesson {
  width: 300px;
  height: 80px;
  padding-top: 0.6em;
  margin: auto;
  color: rgb(245, 63, 63);
  border: 1px solid rgb(235, 63, 63);
  border-radius: 60px;
  transition: background-color 0.6s, color 0.6s;
}
.lesson:hover {
  background-color: rgb(252, 87, 87);
  color: white;
}
.active {
  color: rgb(53, 172, 53);
  border: 1px solid rgb(53, 172, 53);
}
.active:hover {
  color: white;
  background-color: rgb(91, 206, 91);
}
#header {
  position: relative;
  top: 0.4em;
  font-size: 1.5em;
  font-weight: bold;
}
#time {
  font-size: 1.2em;
  margin: 0;
}
#texts {
  position: relative;
  bottom: 0.4em;
}
.badge-light {
  position: relative;
  bottom: 110px;
  left: 180px;
  border: 1px solid black;
}
</style>