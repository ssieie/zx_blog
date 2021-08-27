<template>
  <div class="time-warp fl-c">
    <i class="fa fa-clock-o"></i>
    <div class="time fl-c" v-if="~dayF"
         :class="{'run-o':dayTH===9&&dayT===9&&dayO===9&&hourT===2&&(hourO===9||hourO===3)&&minuteT===5&&minuteO===9&&secondT===5&&secondO===9}">
      {{ dayF }}
    </div>
    <div class="time fl-c" v-if="~dayTH"
         :class="{'run-o':dayT===9&&dayO===9&&hourT===2&&(hourO===9||hourO===3)&&minuteT===5&&minuteO===9&&secondT===5&&secondO===9}">
      {{ dayTH }}
    </div>
    <div class="time fl-c" v-if="~dayT"
         :class="{'run-o':dayO===9&&hourT===2&&(hourO===9||hourO===3)&&minuteT===5&&minuteO===9&&secondT===5&&secondO===9}">
      {{ dayT }}
    </div>
    <div class="time fl-c"
         :class="{'run-o':hourT===2&&(hourO===9||hourO===3)&&minuteT===5&&minuteO===9&&secondT===5&&secondO===9}">
      {{
        dayO
      }}
    </div>
    <div class="text">天</div>
    <div class="time fl-c"
         :class="{'run-o':(hourO===9||hourO===3)&&minuteT===5&&minuteO===9&&secondT===5&&secondO===9}">{{
        hourT
      }}
    </div>
    <div class="time fl-c" :class="{'run-o':minuteT===5&&minuteO===9&&secondT===5&&secondO===9}">{{ hourO }}</div>
    <div class="text">小时</div>
    <div class="time fl-c" :class="{'run-o':minuteO===9&&secondT===5&&secondO===9}">{{ minuteT }}</div>
    <div class="time fl-c" :class="{'run-o':secondT===5&&secondO===9}">{{ minuteO }}</div>
    <div class="text">分钟</div>
    <div class="time fl-c" :class="{'run-o':secondO===9}">{{ secondT }}</div>
    <div class="time run fl-c">{{ secondO }}</div>
    <div class="text">秒</div>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';

export default class RunTimeClock extends Vue {
  private readonly currentTime: number = new Date('2021/8/24 12:00:00').getTime();
  private readonly nowTime: number = new Date().getTime();
  public timer: any = null;

  public secondO: number = 0;
  public secondT: number = 0;

  public minuteO: number = 0;
  public minuteT: number = 0;

  public hourO: number = 0;
  public hourT: number = 0;

  public dayO: number = 0;
  public dayT: number = -1;
  public dayTH: number = -1;
  public dayF: number = -1;

  cleaningTime() {
    let diffTime: number = (this.nowTime - this.currentTime) / 1000;
    let end_days: number = parseInt((diffTime / 86400).toString(), 10);
    let end_hours: number = parseInt((diffTime / 3600).toString(), 10) - 24 * end_days;
    let end_minutes: number = parseInt((diffTime % 3600 / 60).toString(), 10);
    let end_seconds: number = parseInt((diffTime % 60).toString(), 10);
    if (end_seconds.toString().length === 2) {
      this.secondO = parseInt(end_seconds.toString().slice(1));
      this.secondT = parseInt(end_seconds.toString().slice(0, 1));
    } else {
      this.secondO = end_seconds;
      this.secondT = 0;
    }
    if (end_minutes.toString().length === 2) {
      this.minuteO = parseInt(end_minutes.toString().slice(1));
      this.minuteT = parseInt(end_minutes.toString().slice(0, 1));
    } else {
      this.minuteO = end_minutes;
      this.minuteT = 0;
    }
    if (end_hours.toString().length === 2) {
      this.hourO = parseInt(end_hours.toString().slice(1));
      this.hourT = parseInt(end_hours.toString().slice(0, 1));
    } else {
      this.hourO = end_hours;
      this.hourT = 0;
    }

    switch (end_days.toString().length) {
      case 1:
        this.dayO = end_days;
        break;
      case 2:
        this.dayO = parseInt(end_days.toString().slice(1));
        this.dayT = parseInt(end_days.toString().slice(0, 1));
        break;
      case 3:
        this.dayO = parseInt(end_days.toString().slice(2, 3));
        this.dayT = parseInt(end_days.toString().slice(1, 2));
        this.dayTH = parseInt(end_days.toString().slice(0, 1));
        break;
      case 4:
        this.dayO = parseInt(end_days.toString().slice(3, 4));
        this.dayT = parseInt(end_days.toString().slice(2, 3));
        this.dayTH = parseInt(end_days.toString().slice(1, 2));
        this.dayF = parseInt(end_days.toString().slice(0, 1));
        break;
      default:
        break;
    }

  }

  created() {
    this.cleaningTime();
    this.$watch('secondO', (value: number) => {
      if (value === 10) {
        this.secondT++;
        this.secondO = 0;
      }
    });
    this.$watch('secondT', (value: number) => {
      if (value === 6) {
        this.minuteO++;
        this.secondT = 0;
      }
    });
    this.$watch('minuteO', (value: number) => {
      if (value === 10) {
        this.minuteT++;
        this.minuteO = 0;
      }
    });
    this.$watch('minuteT', (value: number) => {
      if (value === 6) {
        this.hourO++;
        this.minuteT = 0;
      }
    });
    this.$watch('hourO', (value: number) => {
      if (this.hourT === 2) {
        if (value === 4) {
          this.hourT++;
          this.hourO = 0;
        }
      } else {
        if (value === 10) {
          this.hourT++;
          this.hourO = 0;
        }
      }
    });
    this.$watch('hourT', (value: number) => {
      if (value === 3) {
        this.dayO++;
        this.hourT = 0;
      }
    });
    this.$watch('dayO', (value: number) => {
      if (value === 10) {
        this.dayT++;
        this.dayO = 0;
      }
    });
    this.$watch('dayT', (value: number) => {
      if (value === 10) {
        this.dayTH++;
        this.dayT = 0;
      }
    });
    this.$watch('dayTH', (value: number) => {
      if (value === 10) {
        this.dayF++;
        this.dayTH = 0;
      }
    });
  }

  runClock() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      return;
    }
    this.timer = setInterval(() => {
      this.secondO++;
    }, 1000);
  }

  mounted() {
    this.runClock();
  }

  unmounted() {
    clearInterval(this.timer);
    this.timer = null;
  }

}
</script>

<style scoped lang="scss">
.time-warp {
  font-size: 15px;
  overflow: hidden;

  .time {
    //background-color: #88d3ce;
    width: 15px;
    height: 15px;

  }

  .run {
    animation: timeAnimation 1s infinite .5s;
  }

  .run-o {
    animation: timeAnimation 1.5s infinite;
  }

  .text {
    margin: 0 3px;
  }
}

@-webkit-keyframes timeAnimation {
  0% {
    transform: skewY(0deg) rotateX(0deg);
  }
  50% {
    transform: skewY(90deg) rotateX(90deg);
  }
  100% {
    transform: skewY(0deg) rotateX(0deg);
  }
}

@keyframes timeAnimation {
  0% {
    transform: skewY(0deg) rotateX(0deg);
  }
  50% {
    transform: skewY(90deg) rotateX(90deg);
  }
  100% {
    transform: skewY(0deg) rotateX(0deg);
  }
}
</style>
