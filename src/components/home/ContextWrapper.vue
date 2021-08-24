<template>
  <div>
    <navbar/>
    <div class="wrapper">
      <h1 v-for="(item,index) in testList" :key="index">{{ index }} - {{ item }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Navbar from '@/components/home/Navbar.vue';
import utils from '@/assets/utils/util';

@Options({
  components: {
    Navbar
  },
  emits: ['showScrollTopIcon']
})
export default class ContextWrapper extends Vue {
  public testList: Array<Number> = [];

  created() {
    for (let i = 0; i < 100; i++) {
      this.testList.push(i);
    }
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
</style>
