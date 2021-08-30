<template>
  <div class="container">
    <div class="title">目前总计 <span>{{ testList.length }}</span> 条记录</div>
    <event-item v-for="(item,index) in testList" :index="index" :time="item.time" :title="item.title" :id="item.id"/>
  </div>
  <pager :totalPage="totalPage" :currentPage="currentPage" @pageChange="pageChange"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

import EventItem from '@/views/event/EventItem.vue';
import Pager from '@/components/common/Pager.vue';

@Options({
  components: {
    Pager,
    EventItem
  }
})
export default class EventView extends Vue {

  public testList: Array<any> = [];
  // page
  public totalPage: number = 10;
  public currentPage: number = 1;

  created() {
    for (let i = 0; i <= 10; i++) {
      let vote = {id: -1, time: '', title: ''};
      if (i % 3 === 0) {
        vote.id = -1;
        vote.time = 2021 - i + '';
      } else {
        vote.id = i;
        vote.time = `08 - 30 - ${i}`;
      }
      vote.title = `第${i}个事件`;

      this.testList.push(vote);
    }

  }


  pageChange(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
  border-left: 4px solid #dedede;
  margin: 80px auto 0;
}

@media screen and (max-width: 1420px) {
  .container {
    width: 55%;
  }
}

@media screen and (max-width: 1170px) {
  .container {
    width: 65%;
  }
}

@media screen and (max-width: 787px) {
  .container {
    width: 80%;
    margin-top: 30px;
  }
}
</style>
