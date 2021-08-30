<template>
  <div class="pager fl">
    <div class="block fl-c" :class="{'ac':pageUpSel}" @mouseenter="pageUpSel=true"
         @mouseleave="pageUpSel=false" @click="selPager(0)">
      <i style="font-size: 20px" class="fa fa-angle-left"></i>
    </div>
    <div v-for="page in simulationPager" class="fl">
      <div class="block fl-c" v-if="page!==0" :class="{'ac':page===selectBlock||page===currentPage}"
           @mouseenter="selectBlock=page"
           @mouseleave="selectBlock=-1" @click="selPager(page)">{{ page }}
      </div>
      <div class="omit" v-else>
        <p>...</p>
      </div>
    </div>
    <div class="block fl-c" :class="{'ac':pageDownSel}" @mouseenter="pageDownSel=true"
         @mouseleave="pageDownSel=false" @click="selPager(-1)">
      <i style="font-size: 20px" class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue, prop} from 'vue-class-component';

class Props {
  totalPage = prop({
    type: Number,
    required: true,
    validator: (value: number) => value > 0
  });
  currentPage = prop({
    type: Number,
    required: true,
    validator: (value: number) => value > 0
  });
}

@Options({
  emits: ['pageChange']
})
export default class Pager extends Vue.with(Props) {
  public selectBlock: number = -1;
  public pageUpSel: boolean = false;
  public pageDownSel: boolean = false;

  // 模拟分页器选项 数组max length = 7
  public simulationPager: Array<number> = [];

  created() {
    this.initSimulationPager();
  }

  initSimulationPager() {
    if (this.totalPage < 6) {
      for (let i = 1; i <= this.totalPage; i++) {
        this.simulationPager.push(i);
      }
    } else {
      for (let i = 1; i <= 4; i++) {
        this.simulationPager.push(i);
      }
      this.simulationPager.push(0);
      this.simulationPager.push(this.totalPage);
    }
  }

  selPager(page: number) {
    let pageNum: number = this.currentPage;
    switch (page) {
      case 0:
        pageNum--;
        break;
      case -1:
        pageNum++;
        break;
      default:
        pageNum = page;
        break;
    }

    if (pageNum > 3) {
      if (this.simulationPager[1] !== 0) {
        this.simulationPager.splice(1, 0, 0);
      }
      if (pageNum > this.currentPage && pageNum < this.totalPage - 2) {
        this.simulationPager[4] = this.simulationPager[4] + 1;
        this.simulationPager[3] = this.simulationPager[3] + 1;
        this.simulationPager[2] = this.simulationPager[2] + 1;
      } else if (pageNum < this.currentPage && pageNum > 3) {
        if (this.simulationPager[this.simulationPager.length - 2] === 0) {
          this.simulationPager[4] = this.simulationPager[4] - 1;
          this.simulationPager[3] = this.simulationPager[3] - 1;
          this.simulationPager[2] = this.simulationPager[2] - 1;
        } else if (pageNum === this.totalPage - 3 && pageNum < this.currentPage) {
          this.simulationPager[4] = this.simulationPager[4] - 1;
          this.simulationPager[3] = this.simulationPager[3] - 1;
          this.simulationPager[2] = this.simulationPager[2] - 1;
        }
      }
    }

    if (pageNum <= 3) {
      if (this.simulationPager[1] === 0) {
        this.simulationPager.splice(1, 1);
        this.simulationPager[1] = 2;
        this.simulationPager[2] = 3;
        this.simulationPager[3] = 4;
      }
    }
    if (pageNum === this.totalPage) {
      this.simulationPager[4] = this.totalPage - 1;
      this.simulationPager[3] = this.totalPage - 2;
      this.simulationPager[2] = this.totalPage - 3;
    }

    if (pageNum >= this.totalPage - 2) {
      if (this.simulationPager[this.simulationPager.length - 2] === 0) {
        this.simulationPager.splice(-2, 1);
        if (pageNum === this.totalPage - 2) {
          this.simulationPager[2] = this.totalPage - 3;
          this.simulationPager[3] = this.totalPage - 2;
          this.simulationPager[4] = this.totalPage - 1;
        }
      }
    }
    if (pageNum < this.totalPage - 2) {
      if (this.simulationPager[this.simulationPager.length - 2] !== 0) {
        this.simulationPager.splice(-1, 0, 0);
      }
    }

    if (pageNum !== 0 && pageNum <= this.totalPage) {
      this.$emit('pageChange', pageNum);
    }
  }
}
</script>

<style scoped lang="scss">
.pager {
  width: 50%;
  margin: 70px auto 0;
  border-top: 2px solid #f5f5f5;

  .block {
    width: 35px;
    height: 33px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: all .3s;
    margin-right: 15px;
  }

  .omit {
    margin-right: 15px;
  }

  .ac {
    background-color: rgba(136, 135, 135, 0.68);
    position: relative;
    color: #ffffff;

    &::after {
      content: '';
      position: absolute;
      top: -2px;
      height: 2px;
      left: 0;
      right: 0;
      z-index: 9;
      background-color: #333333;
    }
  }
}

@media screen and (max-width: 1420px) {
  .pager {
    width: 55%;
  }
}

@media screen and (max-width: 1170px) {
  .pager {
    width: 65%;
  }
}

@media screen and (max-width: 787px) {
  .pager {
    width: 85%;
  }
}

@media screen and (max-width: 400px) {
  .pager {

    .block {
      width: 25px;
      height: 23px;
      font-size: 13px;
    }

    .omit {
      p {
        margin: 0;
      }
    }
  }
}
</style>
