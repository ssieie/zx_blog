<template>
  <div>About</div>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {getCurrentInstance} from 'vue';

export default class About extends Vue {
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter;

  mounted() {
    this.emitter.emit('loadList');
  }
}
</script>

<style scoped lang="scss">

</style>
