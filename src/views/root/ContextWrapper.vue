<template>
  <div>
    <page-line :height="pageHeight"/>
    <transition appear name="fade">
      <navbar/>
    </transition>
    <div class="wrapper">
      <router-view/>
    </div>
    <page-footer/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

import Navbar from '@/views/root/Navbar.vue';
import PageLine from '@/views/root/PageLine.vue';
import PageFooter from '@/components/home/PageFooter.vue';

import {getCurrentInstance} from 'vue';

import utils from '@/assets/utils/util';

@Options({
  components: {
    Navbar,
    PageLine,
    PageFooter
  },
  emits: ['showScrollTopIcon']
})
export default class ContextWrapper extends Vue {
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter;
  // 网页高度 一些特殊情况下 获取到正确的结果后传给页面进度组件(比如有网络请求)
  public pageHeight: number = 0;

  created() {
    this.emitter.on('loadList', utils.debounce(this.updateLoadList, this, 500));
  }

  updateLoadList() {
    console.log('页面更新啦~~');
    this.pageHeight = document.body.scrollHeight;
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
      this.pageHeight = document.body.scrollHeight;
    });
    window.addEventListener('scroll', this.scrollFunc);
  }

  unmounted() {
    window.removeEventListener('scroll', this.scrollFunc);
    this.emitter.off('loadList');
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
