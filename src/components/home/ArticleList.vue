<template>
  <h1 :class="{'ready':ready}">{{ index }} - {{ content }}</h1>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    content: Number,
    index: Number
  },
  emits: ['articleItemIsReady']
})
export default class ArticleList extends Vue {
  public index!: number;
  public ready: boolean = false;

  isReady() {
    setTimeout(() => {
      this.ready = true;
    }, (this.index + 1) * 200);
  }

  mounted() {
    this.isReady();
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  opacity: 0;
  transition: all .55s;
}

.ready {
  opacity: 1;
}
</style>
