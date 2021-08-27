<template>
  <div class="container fl">
    <article-list v-for="(item,index) in testList" :key="index" :content="item" :index="index"/>
    <pager :totalPage="totalPage" :currentPage="currentPage" @pageChange="pageChange"/>
  </div>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import ArticleList from '@/components/home/ArticleList.vue';
import Pager from '@/components/common/Pager.vue';


@Options({
  components: {
    ArticleList,
    Pager
  }
})
export default class HomeView extends Vue {
  public testList: Array<Number> = [];
  public totalPage: number = 15;
  public currentPage: number = 1;

  created() {
    for (let i = 0; i < 10; i++) {
      this.testList.push(i);
    }
  }

  pageChange(page: number) {
    if (page === 0) {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    } else if (page === -1) {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    } else {
      this.currentPage = page;
    }
    console.log(page);
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
