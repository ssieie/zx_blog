<template>
  <h3 style="text-align: center;padding: 30px 0" v-for="test in 10">OtherView</h3>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {getCurrentInstance} from 'vue';

export default class OtherView extends Vue {
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter;

  mounted() {
    this.emitter.emit('loadList');
  }
}
</script>

<style scoped lang="scss">

</style>
