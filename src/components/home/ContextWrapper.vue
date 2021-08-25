<template>
  <div>
    <page-line :height="pageHeight"/>
    <transition appear name="fade">
      <navbar/>
    </transition>
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

import Navbar from '@/components/home/Navbar.vue';
import PageLine from '@/components/home/PageLine.vue';


import utils from '@/assets/utils/util';

@Options({
  components: {
    Navbar,
    PageLine,
  },
  emits: ['showScrollTopIcon']
})
export default class ContextWrapper extends Vue {
  // 网页高度 一些特殊情况下 获取到正确的结果后传给页面进度组件(比如有网络请求)
  public pageHeight: number = 0;

  created() {

  }

  // 页面滚动监听函数
  handlerScroll() {
    let scrollTop: number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 210) {
      this.$emit('showScrollTopIcon', true);
    } else {
      this.$emit('showScrollTopIcon', false);
    }
  }

  public scrollFunc: any = utils.throttle(this.handlerScroll, this, 300);

  mounted() {
    this.$nextTick(() => {
      // 测试页面进度条是否正常
      this.pageHeight = 2000;
      setTimeout(() => {
        this.pageHeight = document.body.scrollHeight;
      }, 2000);
    });
    window.addEventListener('scroll', this.scrollFunc);
  }

  unmounted() {
    window.removeEventListener('scroll', this.scrollFunc);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  color: #333333;
  width: 100%;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
