<template>
  <div class="line" ref="line">
    <div class="line-w" :style="{'width':lineWidth+'px'}"></div>
  </div>
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';
import utils from '@/assets/utils/util';

class Props {
  height = prop<number>({default: document.body.scrollHeight});
}

@Options({
  watch: {
    height: () => {
    }
  }
})
export default class PageLine extends Vue.with(Props) {
  public lineWidth: number = 0;
  public lineWidthTotal: number = 0;
  public currentHeight: number = 0;
  public windowDocHeight: number = document.documentElement.clientHeight || document.body.clientHeight;

  // 页面滚动监听函数
  handlerScroll() {
    let scrollTop: number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (this.currentHeight === 0) {
      return;
    }
    this.lineWidth = scrollTop / this.currentHeight * this.lineWidthTotal;
  }

  public scrollFunc: any = utils.throttle(this.handlerScroll, this, 300);

  created() {
    this.$watch('height', (value: number) => {
      this.currentHeight = value - this.windowDocHeight;
    });

    this.$watch('currentHeight', () => {
      this.handlerScroll();
    });
  }

  mounted() {
    this.lineWidthTotal = (this.$refs.line as HTMLElement).offsetWidth;
    window.addEventListener('scroll', this.scrollFunc);
  }

  unmounted() {
    window.removeEventListener('scroll', this.scrollFunc);
  }
}
</script>

<style scoped lang="scss">
.line {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #f5f5f5;
  border-radius: 10px;

  .line-w {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: 20px;
    transition: all .45s;
    background-image: linear-gradient(to right, #88d3ce, #6e45e2);
  }
}


@media screen and (max-width: 767px) {
  .line {
    display: none;
  }
}
</style>
