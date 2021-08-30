<template>
  <div class="item-wrap fl">
    <div class="title-wrap fl" :class="{'title-wrap-ready':ready}" v-if="~id">
      <div class="time">{{ time }}</div>
      <div class="title">{{ title }}</div>
      <div class="point"></div>
    </div>
    <div class="time-y" :class="{'time-y-ready':ready}" v-else>{{ time }}</div>
  </div>
</template>

<script lang="ts">
import {prop, Vue} from 'vue-class-component';
import {getCurrentInstance} from 'vue';

class Props {
  index!: number;

  time!: string;
  title!: string;
  id = prop({
    type: Number,
    default: -1
  });
}

export default class EventItem extends Vue.with(Props) {
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter;

  public ready: boolean = false;

  isReady() {
    setTimeout(() => {
      this.ready = true;
    }, (this.index + 1) * 60);
  }


  mounted() {
    this.isReady();
    setTimeout(() => {
      this.emitter.emit('loadList');
    }, (this.index + 1) * 70);
  }
}
</script>

<style scoped lang="scss">
.item-wrap {

  .title-wrap {
    align-items: center;
    width: 100%;
    border-bottom: 1px dashed #bdbcbc;
    padding: 0 25px 8px;
    margin: 0 0 25px;
    position: relative;
    cursor: pointer;
    opacity: 0;
    transition: all .23s;

    &:hover {
      border-bottom: 1px dashed #333333;
      color: #000000;

      .point {
        background-color: #757575;
      }
    }

    .time {
      font-size: 13px;
      color: #000;
      margin-right: 15px;
    }

    .title {
      font-size: 15px;
    }

    .point {
      position: absolute;
      left: -2px;
      top: 6px;
      width: 8px;
      height: 8px;
      background-color: #bbbbbb;
      border-radius: 50%;
      transition: all .23s;
    }
  }

  .title-wrap-ready {
    opacity: 1;
    margin-top: 20px;
  }

  .time-y {
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 600;
    color: #939393;
    padding: 25px 25px 30px 3px;
    position: relative;
    opacity: 0;
    transition: all .23s;

    &::before {
      content: '';
      position: absolute;
      left: -3px;
      top: 29px;
      width: 10px;
      height: 10px;
      background-color: #bbbbbb;
      border-radius: 50%;
    }
  }

  .time-y-ready {
    opacity: 1;
    padding-left: 25px;
    font-size: 18px;
  }
}
</style>
