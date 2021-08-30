<template>
  <div>
    <div class="nav-bar-pc fl-c">
      <div class="nav-wrap fl-b">
        <div class="logo fl-c"></div>
        <div class="menu-list fl">
          <div class="menu-item fl-c" @click="toPage('index')">
            <i class="fa fa-home"></i>
            <span>首页</span>
          </div>
          <div class="menu-item fl-c" @click="toPage('category')">
            <i class="fa fa-book"></i>
            <span>归档</span>
          </div>
          <div class="menu-item fl-c" @click="toPage('tags')">
            <i class="fa fa-tags"></i>
            <span>标签</span>
          </div>
          <div class="menu-item fl-c" @click="toPage('event')">
            <i class="fa fa-rocket"></i>
            <span>事件</span>
          </div>
          <div class="menu-item fl-c" @click="toPage('other')">
            <i class="fa fa-coffee"></i>
            <span>杂项</span>
          </div>
          <div class="menu-item fl-c" @click="toPage('about')">
            <i class="fa fa-user"></i>
            <span>关于此站</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-bar-mobile" :style="{'height':mobileBarHeight}">
      <div class="nb-mobile-wrap fl-b" :class="{'nb-mobile-wrap-ac':mobileBarHeight!=='50px'}">
        <div class="logo fl-c"></div>
        <div class="menu fl" @click="clickMenu">
          <span :class="{'line-one-close':mobileBarHeight!=='50px'}"></span>
          <span :class="{'line-two-close':mobileBarHeight!=='50px'}"></span>
          <span :class="{'line-three-close':mobileBarHeight!=='50px'}"></span>
        </div>
      </div>
      <div class="menu-list">
        <div class="menu-item" @click="toPage('index')">
          <i class="fa fa-home"></i>
          <span>首页</span>
        </div>
        <div class="menu-item" @click="toPage('category')">
          <i class="fa fa-book"></i>
          <span>文章归档</span>
        </div>
        <div class="menu-item" @click="toPage('tags')">
          <i class="fa fa-tags"></i>
          <span>标签</span>
        </div>
        <div class="menu-item" @click="toPage('event')">
          <i class="fa fa-rocket"></i>
          <span>事件</span>
        </div>
        <div class="menu-item" @click="toPage('other')">
          <i class="fa fa-coffee"></i>
          <span>杂项</span>
        </div>
        <div class="menu-item" @click="toPage('about')">
          <i class="fa fa-user"></i>
          <span>关于此站</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Vue} from 'vue-class-component';

export default class Navbar extends Vue {
  public mobileBarHeight: string = '50px';

  clickMenu() {
    this.mobileBarHeight = this.mobileBarHeight === '50px' ? '240px' : '50px';
  }

  toPage(url: string) {
    this.mobileBarHeight = '50px';
    this.$router.push(url);
  }
}
</script>

<style scoped lang="scss">
.nav-bar-pc {
  width: 100%;
  height: 90px;
  background: #f5f5f5;
  margin-top: 4px;

  .nav-wrap {
    width: 55%;

    .logo {
      width: 70px;
      height: 40px;
      background: #6ec6e1;
    }

    .menu-list {
      font-size: 14px;
      color: #655e5e;
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      user-select: none;

      .menu-item {
        cursor: pointer;
        margin-left: 20px;
        padding: 7px 10px;
        border-radius: 4px;
        transition: background-color .35s;

        i {
          margin-right: 3px;
        }
      }

      .menu-item:hover {
        color: #333333;
        background: rgba(191, 192, 192, 0.57);
      }
    }
  }
}

.nav-bar-mobile {
  display: none;
  width: 100%;
  background: #f5f5f5;
  transition: all .45s;
  overflow: hidden;


  .nb-mobile-wrap {
    padding: 0 25px;
    height: 50px;
    margin: 0 auto;

    .menu {
      width: 35px;
      height: 28px;
      background: #ffffff;
      border-radius: 5px;
      box-shadow: 1px 1px 5px #c0bcbc;
      flex-direction: column;

      span {
        display: block;
        width: 18px;
        height: 2px;
        background: #a99b9b;
        transition: all .5s;
      }

      span:nth-child(1) {
        margin: 6px auto 0
      }

      span:nth-child(2) {
        margin: 5px auto
      }

      span:nth-child(3) {
        margin: 0 auto 0
      }

      .line-one-close {
        margin-top: 13px !important;
        transform: rotate(45deg);
      }

      .line-two-close {
        display: none;
      }

      .line-three-close {
        margin-left: 9px !important;
        margin-top: -2px !important;
        transform: rotate(-45deg);
      }
    }

    .logo {
      width: 40px;
      height: 30px;
      background: #9dd1e3;
      color: #ffffff;
    }
  }

  .menu-list {
    font-size: 14px;
    color: #333333;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    user-select: none;

    .menu-item {
      margin-left: 30px;
      margin-top: 13px;

      i {
        margin-right: 5px;
      }
    }

    :hover {
      color: #4343b9;
    }
  }

  .nb-mobile-wrap-ac {
    border-bottom: 1px solid #ccc2c2;
  }
}

@media screen and (max-width: 1420px) {
  .nav-bar-pc {
    .nav-wrap {
      width: 60%;
    }
  }
}

@media screen and (max-width: 1170px) {
  .nav-bar-pc {
    .nav-wrap {
      width: 70%;
    }
  }
}

@media screen and (max-width: 787px) {
  .nav-bar-pc {
    display: none;
  }
  .nav-bar-mobile {
    display: block;
  }
}
</style>
