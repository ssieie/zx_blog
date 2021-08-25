<template>
  <div class="negative-page-control fl" @mouseenter="negativePageControl=true"
       @mouseleave="negativePageControl=false"
       @click="clickMenu">
    <span :class="{'line-one':negativePageControl && !currentStatus,'line-one-close':currentStatus}"></span>
    <span :class="{'line-two':negativePageControl && !currentStatus,'line-two-close':currentStatus}"></span>
    <span :class="{'line-three':negativePageControl && !currentStatus,'line-three-close':currentStatus}"></span>
  </div>
  <div class="page-top-btn fl-c" :class="{'page-top-btn-active':isShowTop}" @click="scrollToTop"
       @mouseenter="pageTopHover=true"
       @mouseleave="pageTopHover=false">
    <img :class="{'is-hover':pageTopHover}" :src="topIcon" alt="">
  </div>
</template>

<script lang="ts">

import {Vue, Options} from 'vue-class-component';

@Options({
  props: {
    currentStatus: Boolean,
    isShowTop: Boolean
  },
  emits: ['clickMenuEmit'],
  watch: {
    currentStatus: () => {
    }
  }
})

export default class NegativePageControlBtn extends Vue {
  public negativePageControl: boolean = false;
  public pageTopHover: boolean = false;
  public topIcon: string = require('@/assets/images/to_up.png');

  created() {
    this.$watch('currentStatus', (value: boolean) => {
    });
  }

  public clickMenu() {
    this.$emit('clickMenuEmit');
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>

<style scoped lang="scss">
.negative-page-control {
  position: fixed;
  bottom: 100px;
  right: 70px;
  flex-direction: column;
  cursor: pointer;
  z-index: 9999;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  background: #505050;

  span {
    display: block;
    width: 18px;
    height: 2px;
    background: #f5f5f5;
    transition: all .5s;
  }

  span:nth-child(1) {
    margin: 6px auto 0
  }

  span:nth-child(2) {
    margin: 5px auto
  }

  span:nth-child(3) {
    margin: 0 auto 0
  }


  .line-one {
    transform: rotate(-40deg);
    width: 11px;
    margin-left: 5px !important;
    margin-top: 9px !important;
  }

  .line-one-close {
    width: 18px;
    margin-left: 5px !important;
    margin-top: 13px !important;
    transform: rotate(-45deg);
  }

  .line-two {
    border-radius: 2px 0 0 2px;
    margin: 2px auto !important;
  }

  .line-two-close {
    display: none;
  }

  .line-three {
    width: 11px;
    margin-left: 5px !important;
    transform: rotate(40deg);
  }

  .line-three-close {
    width: 18px;
    margin-top: -2px !important;
    margin-left: 6px !important;
    transform: rotate(45deg);
  }
}

.page-top-btn {
  position: fixed;
  bottom: 40px;
  right: 70px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  background: #505050;
  opacity: 0;
  z-index: -999;
  transition: all .3s ease-out;

  img {
    width: 70%;
    height: 70%;
    transition: all .3s;
  }

  .is-hover {
    transform: translate(0, -15%) scale(1.1);
  }
}

.page-top-btn-active {
  z-index: 9999;
  opacity: 1;
  bottom: 60px;
}

@media screen and (max-width: 767px) {
  .negative-page-control, .page-top-btn {
    display: none;
  }
}
</style>
