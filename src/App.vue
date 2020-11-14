<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <div class="row box">
          <div class="col">
            <box :msg="lessons[0]" :isStart="currentLesson.isStart" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="row info">
              <div class="col">
                <currentLessonInfo
                  :header="`Başlangıç`"
                  :content="currentLesson.startAt"
                />
              </div>
              <div class="col">
                <currentLessonInfo
                  :header="`Bitiş`"
                  :content="currentLesson.finishAt"
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
                  :header="`Mekan`"
                  :content="'linknknkasndkasdn'"
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
          :content="lessons[1].name"
        />
      </div>
      <div class="col">
        <nextLessonInfo
          :header="`Başlangıç Saati`"
          :content="lessons[1].startAt"
        />
      </div>
      <div class="col">
        <nextLessonInfo
          :header="`Bitiş Saati`"
          :content="lessons[1].finishAt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import box from "./components/box.vue";
import nextLessonInfo from "./components/nextLessonInfo.vue";
import currentLessonInfo from "./components/currentLessonInfo.vue";
import "bootstrap";

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
        name: "name",
        startAt: 10,
        finishAt: 30,
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
          name: "Ders1",
          startAt: new Date(2020, 9, 7, 9, 0),
          finishAt: new Date(2020, 9, 7, 11, 10),
        },
        {
          name: "Ders2",
          startAt: new Date(2020, 9, 7, 11, 0),
          finishAt: new Date(2020, 9, 7, 12, 10),
        },
        // {
        //   name: "Veri Iletişimi",
        //   startAt: new Date(2020, 9, 6, 20, 0),
        //   finishAt: new Date(2020, 9, 6, 22, 10),
        // },
        // {
        //   name: "Işaretler",
        //   startAt: new Date(2020, 9, 7, 0, 0),
        //   finishAt: new Date(2020, 9, 7, 3, 0),
        // },
        // {
        //   name: "Nesnelerin Interneti",
        //   startAt: new Date(2020, 9, 9, 9, 0),
        //   finishAt: new Date(2020, 9, 9, 12, 0),
        // },
        // {
        //   name: "Elektronik Devre ve Lab",
        //   startAt: new Date(2020, 9, 5, 17, 0),
        //   finishAt: new Date(2020, 9, 5, 19, 0),
        // },
        // {
        //   name: "Veritabanı Yönetimi",
        //   startAt: new Date(2020, 9, 5, 20, 0),
        //   finishAt: new Date(2020, 9, 5, 23, 0),
        // },
        // {
        //   name: "Sayısal Analiz",
        //   startAt: new Date(2020, 9, 6, 17, 0),
        //   finishAt: new Date(2020, 9, 6, 20, 0),
        // },
        // {
        //   name: "Elektronik Devre ve Lab",
        //   startAt: new Date(2020, 9, 6, 20, 0),
        //   finishAt: new Date(2020, 9, 6, 22, 0),
        // },
        // {
        //   name: "Veri Yapıları",
        //   startAt: new Date(2020, 9, 7, 17, 0),
        //   finishAt: new Date(2020, 9, 7, 20, 0),
        // },
        // {
        //   name: "Mantık Devreleri",
        //   startAt: new Date(2020, 9, 8, 17, 0),
        //   finishAt: new Date(2020, 9, 8, 19, 0),
        // },
        // {
        //   name: "Atatürk Ilke ve Inkılap Tarihi",
        //   startAt: new Date(2020, 9, 8, 20, 0),
        //   finishAt: new Date(2020, 9, 8, 0, 0),
        // },
        // {
        //   name: "Mantık Devreleri",
        //   startAt: new Date(2020, 9, 4, 1, 25),
        //   finishAt: new Date(2020, 9, 4, 2, 0),
        // },
      ],
      now: new Date(),
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
      var now = new Date();
      var today = [];
      var started = [];
      this.lessons.forEach((lesson) => {
        var diff = lesson.startAt.getDay() - now.getDay();
        if (diff === 0) {
          today.push(lesson);
        }
      });
      today.forEach((l) => {
        if (now.getTime() - l.startAt.getTime() < 0) {
          //ders başladı veya kaçırdım
          started.push(l);
        }
      });
      this.currentLesson.isStart = started.length === 0 ? false : true;
      console.log(started.length);
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