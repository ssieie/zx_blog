<template>
  <div class="author-info" :class="{'author-active':!isShow?markShow:isShow}">
    <div class="info" :style="{'width':infoShow?infoWidth:'0px'}">
      <h1>info</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    isShow: Boolean
  },
  watch: {
    isShow() {
    }
  }
})
export default class AuthorInfo extends Vue {
  public infoWidth: string = '370px';
  public infoShow: boolean = false
  public markShow: boolean = false

  created() {
    this.$watch('isShow', (value: boolean) => {
      setTimeout(() => {
        this.infoShow = value
        setTimeout(() => {
          this.markShow = value
        }, 500)
      }, 250)
    })
  }
}
</script>

<style scoped lang="scss">
.author-info {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -9998;
  transition: all .5s ease-in-out;

  .info {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transition: width .5s ease-in-out;
    background: #505050;
  }
}

.author-active {
  z-index: 9998;
}

@media screen and (max-width: 767px) {
  .author-info {
    display: none;
  }
}
</style>
