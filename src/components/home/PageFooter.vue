<template>
  <div class="footer fl-c">
    <div class="wrap">
      <div class="info fl-b">
        <div>
          <i class="fa fa-copyright"></i>
          <span>2021</span>
          <i class="fa fa-heart"></i>
          <span>Zx</span>
        </div>
        <run-time-clock class="clock" />
        <span class="emoji">(´･ω･｀)</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import RunTimeClock from '@/components/home/RunTimeClock.vue';


@Options({
  components: {
    RunTimeClock
  }
})
export default class PageFooter extends Vue {
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 50px;
  padding: 30px 0;
  background-color: #f5f5f5;

  .wrap {
    width: 50%;

    .info {
      position: relative;
      color: #4b4b4b;
      flex-wrap: wrap;

      span {
        padding: 0 8px;
      }

      .emoji {
        position: absolute;
        left: 160px;
        width: 90px;
        animation: emojiAnimation 2s ease 1s infinite;
      }
    }
  }
}

@keyframes emojiAnimation {
  1% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(5deg) scale(1.1) skew(5deg, 10deg);
  }
  10% {
    transform: rotate(-5deg) scale(1) skew(2deg, 5deg);
  }
  15% {
    transform: rotate(8deg) scale(.9) skew(2deg, 5deg);
  }
  20% {
    transform: rotate(-5deg) scale(.8) skew(2deg, 5deg);
  }
  25% {
    transform: rotate(13deg) scale(.2) skew(15deg, 5deg);
  }
  30% {
    transform: rotate(-13deg) scale(1.1) skew(5deg, 5deg);
  }
  35% {
    transform: rotate(16deg) scale(1) skew(3deg, 5deg);
  }
  40% {
    transform: rotate(-14deg) scale(1.3) skew(15deg, -5deg);
  }
  45% {
    transform: rotate(12deg) scale(1.2) skew(1deg, 5deg);
  }
  50% {
    transform: rotate(-11deg) scale(1) skew(-7deg, 3deg);
  }
  55% {
    transform: rotate(5deg) scale(.8) skew(-4deg, 5deg);
  }
  60% {
    transform: rotate(3deg) scale(.9) skew(7deg, 8deg);
  }
  65% {
    transform: rotate(-2deg) scale(1.2) skew(1deg, -4deg);
  }
  70% {
    transform: rotate(8deg) scale(1) skew(1deg, 7deg);
  }
  75% {
    transform: rotate(-4deg) scale(1.1) skew(4deg, -4deg);
  }
  80% {
    transform: rotate(13deg) scale(.8) skew(15deg, 8deg);
  }
  85% {
    transform: rotate(-3deg) scale(.4) skew(4deg, 8deg);
  }
  90% {
    transform: rotate(1deg) scale(.9) skew(5deg, -5deg);
  }
  95% {
    transform: rotate(-2deg) scale(1.1) skew(1deg, 5deg);
  }
  100% {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg);
  }
}

@-webkit-keyframes emojiAnimation {
  1% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(5deg) scale(1.1) skew(5deg, 10deg);
  }
  10% {
    transform: rotate(-5deg) scale(1) skew(2deg, 5deg);
  }
  15% {
    transform: rotate(8deg) scale(.9) skew(2deg, 5deg);
  }
  20% {
    transform: rotate(-5deg) scale(.8) skew(2deg, 5deg);
  }
  25% {
    transform: rotate(13deg) scale(.2) skew(15deg, 5deg);
  }
  30% {
    transform: rotate(-13deg) scale(1.1) skew(5deg, 5deg);
  }
  35% {
    transform: rotate(16deg) scale(1) skew(3deg, 5deg);
  }
  40% {
    transform: rotate(-14deg) scale(1.3) skew(15deg, -5deg);
  }
  45% {
    transform: rotate(12deg) scale(1.2) skew(1deg, 5deg);
  }
  50% {
    transform: rotate(-11deg) scale(1) skew(-7deg, 3deg);
  }
  55% {
    transform: rotate(5deg) scale(.8) skew(-4deg, 5deg);
  }
  60% {
    transform: rotate(3deg) scale(.9) skew(7deg, 8deg);
  }
  65% {
    transform: rotate(-2deg) scale(1.2) skew(1deg, -4deg);
  }
  70% {
    transform: rotate(8deg) scale(1) skew(1deg, 7deg);
  }
  75% {
    transform: rotate(-4deg) scale(1.1) skew(4deg, -4deg);
  }
  80% {
    transform: rotate(13deg) scale(.8) skew(15deg, 8deg);
  }
  85% {
    transform: rotate(-3deg) scale(.4) skew(4deg, 8deg);
  }
  90% {
    transform: rotate(1deg) scale(.9) skew(5deg, -5deg);
  }
  95% {
    transform: rotate(-2deg) scale(1.1) skew(1deg, 5deg);
  }
  100% {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg);
  }
}


@media screen and (max-width: 1420px) {
  .footer {
    .wrap {
      width: 55%;
    }
  }

}

@media screen and (max-width: 1170px) {
  .footer {
    .wrap {
      width: 65%;
    }
  }
}

@media screen and (max-width: 787px) {
  .footer {
    .wrap {
      width: 90%;

      .info {
        .emoji {
          top: 0;
          left: 120px;
        }
        .clock{
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
