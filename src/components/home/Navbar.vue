<template>
  <div class="nav-bar">
    Nav-Bar
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';

export default class Navbar extends Vue {
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  margin-top: 3px;
}

@media screen and (max-width: 800px) {
  .nav-bar {
    margin-top: 0;
  }
}
</style>
