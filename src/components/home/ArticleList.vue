<template>
  <div class="article-list" :class="{'ready':ready}">
    <div class="title">
      <div>标题别特别特别特别{{ index }}-{{ content }}</div>
      <div class="line"></div>
      <div class="line-r"></div>
    </div>
    <div class="info-wrap fl">
      <div class="time fl-c">
        <i class="fa fa-calendar"></i>
        <span>发布于:&nbsp;&nbsp;2021-8-26 10:36</span>
      </div>
      <div class="tag fl-c">
        <i class="fa fa-tag"></i>
        <span>分类于:&nbsp;&nbsp;<span class="cate">标签</span></span>
      </div>
    </div>
    <div class="context">
      时事通讯社称，共发现有约57万剂次莫德纳疫苗存在杂质，杂质呈颗粒状，肉眼可见，
      且大小不一，这些疫苗为莫德纳公司一工厂生产的同一批次疫苗。厚生劳动省现已暂停使用
      该工厂生产的约163万剂次疫苗。《日本经济新闻》称，涉事工厂位于西班牙。时事通讯社援引厚生劳动省的话称，
      有一部分存在杂质的疫苗已经施打，目前还没有收到疫苗对接种者的健康造成伤害的报告，代理商
      武田药品工业公司已向美国莫德纳公司提出要求，希望可以针对此事开展调查。
    </div>
    <div class="read-all fl">
      <div class="fl">
        <div class="read">阅读全文</div>
        <i class="fa fa-angle-double-right"></i>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import {getCurrentInstance} from 'vue';

class Props {
  content!: number;
  index!: number;
}

@Options({
  emits: ['articleItemIsReady'],
})

export default class ArticleList extends Vue.with(Props) {
  public ready: boolean = false;
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter;

  created() {
  }

  isReady() {
    setTimeout(() => {
      this.ready = true;
    }, (this.index + 1) * 250);
  }

  mounted() {
    setTimeout(() => {
      this.emitter.emit('loadList');
    }, (this.index + 1) * 250);
    this.isReady();
  }
}
</script>

<style scoped lang="scss">
.article-list {
  width: 50%;
  margin: 10px auto 20px;
  transition: all .25s;
  opacity: 0;

  .title {
    padding: 10px 0;
    font-size: 27px;
    position: relative;
    display: inline-block;

    .line, .line-r {
      position: absolute;
      bottom: 3px;
      transform: translate(0, -50%);
      height: 2px;
      background-color: #646464;
      transition: all .35s;
    }

    .line {
      left: 50%;
    }

    .line-r {
      right: 50%;
    }

    &:hover .line {
      left: 0;
      right: 50%;
    }

    &:hover .line-r {
      left: 50%;
      right: 0;
    }
  }

  .info-wrap {
    color: #595959;
    font-size: 14px;
    padding: 5px 0 10px 0;

    .time {
      margin-right: 20px;
    }

    .tag {
      .cate {
        padding: 0;
        text-decoration: underline;
        cursor: pointer;
        transition: color .3s;

        &:hover {
          color: #6e45e2;
        }
      }
    }

    span {
      padding-left: 6px;
    }
  }

  .context {
    color: #4b4b4b;
    font-size: 15px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .read-all {
    margin: 25px 0 0 0;
    align-items: center;
    font-size: 15px;
    color: #1a1a1a;
    cursor: pointer;
    position: relative;
    display: inline-block;
    transition: all .3s;

    .read {
      margin-right: 8px;
    }

    .line {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      height: 2px;
      background-color: #656565;
      transition: all .3s;
    }

    &:hover {
      color: #8f8f8f;
    }

    &:hover .line {
      bottom: -3px;
      background-color: #8f8f8f;
    }
  }
}


.ready {
  margin-top: 30px;
  opacity: 1;
}

@media screen and (max-width: 1420px) {
  .article-list {
    width: 55%;
  }
}

@media screen and (max-width: 1170px) {
  .article-list {
    width: 65%;
  }
}

@media screen and (max-width: 787px) {
  .article-list {
    width: 85%;

    .title {
      width: 100%;
      text-align: center;

      .line, .line-r {
        display: none
      }
    }

    .info-wrap {
      flex-direction: column;

      .time {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
