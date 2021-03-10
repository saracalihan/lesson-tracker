<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <div class="row box">
          <div class="col">
            <box
              :msg="lessons[currentLesson.index]"
              :isStart="currentLesson.isStart"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="row info">
              <div class="col">
                <currentLessonInfo
                  :header="`Başlangıç`"
                  :content="`${lessons[currentLesson.index].start.hour()}:${
                    lessons[currentLesson.index].start.minute() == 0
                      ? '00'
                      : lessons[currentLesson.index].start.minute()
                  }`"
                />
              </div>
              <div class="col">
                <currentLessonInfo
                  :header="`Bitiş`"
                  :content="`${lessons[currentLesson.index].end.hour()}:${
                    lessons[currentLesson.index].end.minute() == 0
                      ? '00'
                      : lessons[currentLesson.index].end.minute()
                  }`"
                />
              </div>
              <div class="col">
                <currentLessonInfo
                  :header="`Süre`"
                  :content="currentLesson.totalTime"
                />
              </div>
              <div class="col">
                <currentLessonInfo
                  :header="`Kalan`"
                  :content="currentLesson.remainingTime"
                />
              </div>
              <div class="col">
                <currentLessonInfo
                  :header="`mekan`"
                  :content="lessons[currentLesson.index].url"
                />
              </div>
              <div class="col">
                <currentLessonInfo
                  :header="`Akademisyen`"
                  :content="'currentLesson.finishAtasdasd'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="nextLesson" class="row nextLesson">
      <div class="col">
        <nextLessonInfo
          :header="`Sonraki Ders Adı`"
          :content="lessons[1].title"
        />
      </div>
      <div class="col">
        <nextLessonInfo
          :header="`Başlangıç Saati`"
          :content="lessons[1].start"
        />
      </div>
      <div class="col">
        <nextLessonInfo :header="`Bitiş Saati`" :content="lessons[1].end" />
      </div>
    </div>
  </div>
</template>

<script>
import box from "./components/box.vue";
import nextLessonInfo from "./components/nextLessonInfo.vue";
import currentLessonInfo from "./components/currentLessonInfo.vue";
import "bootstrap";
var moment = require("moment");
moment().format();

export default {
  name: "App",
  components: {
    box,
    nextLessonInfo,
    currentLessonInfo,
  },
  data: function () {
    return {
      currentLesson: {
        index: 0,
        totalTime: 20,
        isStart: !false,
        remainingTime: 10,
      },
      nextLesson: {
        lesson: 0,
        timeLeft: {
          hour: 0,
          minute: 0,
        },
      },

      lessons: [
        {
          title: "EDL",
          start: moment(1601906400000),
          end: moment(1601913600000),
          url: "/tr/Ders/Detay/628883",
          mekan: "İNTERNET",
        },
        {
          title: "VERİTABANI YÖNETİM SİSTEMLERİ",
          start: moment(1601917200000),
          end: moment(1601928000000),
          url: "/tr/Ders/Detay/628880",
          mekan: "İNTERNET",
        },
        {
          title: "VERİ İLETİŞİMİ",
          start: moment(1601964000000),
          end: moment(1601974800000),
          url: "/tr/Ders/Detay/628899",
          mekan: "İNTERNET",
        },
        {
          title: "SAYISAL ANALİZ",
          start: moment(1601992800000),
          end: moment(1602003600000),
          url: "/tr/Ders/Detay/628892",
          mekan: "İNTERNET",
        },
        {
          title: "ELEKTRONİK DEVRELER VE LABORATUVARI",
          start: moment(1602003600000),
          end: moment(1602010800000),
          url: "/tr/Ders/Detay/628883",
          mekan: "İNTERNET",
        },
        {
          title: "İŞARETLER VE SİSTEMLER",
          start: moment(1602050400000),
          end: moment(1602061200000),
          url: "/tr/Ders/Detay/628910",
          mekan: "İNTERNET",
        },
        {
          title: "VERİ YAPILARI",
          start: moment(1602079200000),
          end: moment(1602090000000),
          url: "/tr/Ders/Detay/628870",
          mekan: "İNTERNET",
        },
        {
          title: "MANTIK DEVRELERİ",
          start: moment(1602165600000),
          end: moment(1602172800000),
          url: "/tr/Ders/Detay/628866",
          mekan: "İNTERNET",
        },
        {
          title: "NESNELERİN İNTERNETİ VE UYGULAMALARI",
          start: moment(1602223200000),
          end: moment(1602234000000),
          url: "/tr/Ders/Detay/628925",
          mekan: "İNTERNET",
        },
        {
          title: "MANTIK DEVRELERİ",
          start: moment(1602252000000),
          end: moment(1602259200000),
          url: "/tr/Ders/Detay/628866",
          mekan: "İNTERNET",
        },
      ],
      now: moment(),
    };
  },
  methods: {
    changeColor: function () {
      console.log(this.currentLesson.isStart);
      if (this.currentLesson.isStart) {
        console.log("if");
        document.querySelector("#nextLesson").className =
          "row nextLesson active2";
      } else {
        console.log("else");
        document.querySelector("#nextLesson").className = "row nextLesson";
      }
    },
    setCurrentLesson: function () {
      var now = moment();
      var enYakin = this.lessons[0];
      this.lessons.forEach((l) => {
        if (l.start.isSameOrAfter(now)) {
          if (l.hour() - now.hour() >= 0) {
            if (enYakin.hour() > l.hour) {
              enYakin = l;
            } else if (enYakin.hour() == l.hour()) {
              if (enYakin.minute() > l.minute()) {
                enYakin = l;
              }
            }
          }
        }
      });

      this.currentLesson.index = this.lessons.indexOf(enYakin)
      this.currentLesson.totalTime = 30;
      this.currentLesson.isStart = true;
      this.currentLesson.remainingTime = 21;
    },
    set: function () {
      this.currentLesson.isStart = true; //!this.currentLesson.isStart;
    },
  },

  mounted: function () {
    var that = this;
    setInterval(function () {
      that.set();
      that.changeColor();
    }, 2000);
  },

  metaInfo() {
    return {
      title: this.currentLesson.name,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  margin: 4.3em;
}
.info {
  margin-top: 0em;
  margin-bottom: 1.5em;
}
.nextLesson {
  height: 124px;
  padding: 1em;
  border-top: 2px solid rgba(48, 48, 48, 0.533);
  background-color: rgb(218, 39, 39);
  color: white;
  transition: background-color 0.6s, color 0.6s;
}
.nextLesson:hover {
  background-color: white;
  color: rgb(218, 39, 39);
}
.active2 {
  background-color: rgb(53, 172, 53);
}
.active2:hover {
  color: rgb(53, 172, 53);
}
</style>