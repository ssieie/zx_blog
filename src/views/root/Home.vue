<template>
  <div class="context">
    <context-wrapper @showScrollTopIcon="showScrollTop"/>
  </div>
  <author-info :isShow="authorInfoPageShow"/>
  <negative-page-control-btn :currentStatus="authorInfoPageShow" :isShowTop="isShowPageTop" @clickMenuEmit="clickMenu"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ContextWrapper from '@/views/root/ContextWrapper.vue';
import AuthorInfo from '@/views/authorInfo/AuthorInfo.vue';
import NegativePageControlBtn from '@/views/root/NegativePageControlBtn.vue';

@Options({
  components: {
    ContextWrapper,
    AuthorInfo,
    NegativePageControlBtn,
  },
})

export default class Home extends Vue {
  public authorInfoPageShow: boolean = false;
  public isShowPageTop: boolean = false;

  created() {
  }

  clickMenu() {
    this.authorInfoPageShow = !this.authorInfoPageShow;
  }

  showScrollTop(isShow: boolean) {
    this.isShowPageTop = isShow;
  }
}
</script>

<style lang="scss" scoped>
.context {
  background: #ffffff;
  overflow: hidden;
}
</style>
