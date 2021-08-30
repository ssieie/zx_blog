<template>
  <div class="item-wrap fl">
    <div v-if="~id">{{ time }} {{ title }}</div>
    <div v-else>{{ time }}</div>
  </div>
</template>

<script lang="ts">
import {prop, Vue} from 'vue-class-component';
import {getCurrentInstance} from 'vue';

class Props {
  index!: number;

  time!: string;
  title!: string;
  id = prop({
    type: Number,
    default: -1
  });
}

export default class EventItem extends Vue.with(Props) {
  public emitter = getCurrentInstance()?.appContext.config.globalProperties.emitter;

  mounted() {
    setTimeout(() => {
      this.emitter.emit('loadList');
    }, this.index * 240);
  }
}
</script>

<style scoped lang="scss">

</style>
