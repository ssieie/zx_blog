<template>
  <div>
    <article-list v-for="(item,index) in testList" :key="index" :content="item" :index="index"/>
  </div>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import ArticleList from '@/components/home/ArticleList.vue';

@Options({
  components: {
    ArticleList
  }
})
export default class HomeView extends Vue {
  public testList: Array<Number> = [];

  created() {
    for (let i = 0; i < 30; i++) {
      this.testList.push(i);
    }
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.testList.push(i);
      }
    },6000);
  }
}
</script>

<style scoped lang="scss">

</style>
