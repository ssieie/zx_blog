<template>
  <div class="container fl">
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
    for (let i = 0; i < 10; i++) {
      this.testList.push(i);
    }
  }

}
</script>

<style scoped lang="scss">
.container {
  align-items: center;
  flex-direction: column;
  padding: 40px 0 0 0;
}

@media screen and (max-width: 787px) {
  .container {
    padding: 0;
  }
}
</style>
