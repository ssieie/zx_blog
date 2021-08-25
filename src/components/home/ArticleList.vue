<template>
  <h1 :class="{'ready':ready}">{{ index }} - {{ content }}</h1>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import {getCurrentInstance} from "vue";

@Options({
  props: {
    content: Number,
    index: Number
  },
  emits: ['articleItemIsReady'],
})
export default class ArticleList extends Vue {
  public index!: number;
  public ready: boolean = false;
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter

  created() {

  }


  isReady() {
    setTimeout(() => {
      this.ready = true;
    }, (this.index + 1) * 200);
  }

  mounted() {
    this.emitter.emit('loadList')
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
