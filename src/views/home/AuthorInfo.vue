<template>
  <div class="author-info" :class="{'author-active':isShow}">
    <div class="info" :style="{'width':isShow?infoWidth:'0px'}">
      <h1>info</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    isShow: Boolean
  }
})
export default class AuthorInfo extends Vue {
  public infoWidth: string = '370px';

  created() {
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
  transition: all .45s ease-in-out;

  .info {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transition: width .45s ease-out;
    background: #505050;
  }
}

.author-active {
  z-index: 9998;
}

@media screen and (max-width: 800px) {
  .author-info {
    display: none;
  }
}
</style>
