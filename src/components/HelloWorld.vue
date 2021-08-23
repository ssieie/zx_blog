<template>
  <div @click="testClick">{{ msg }}</div>
  {{ test }}
  {{ haha }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: Number,
    test: {
      type: Object,
    },
  },
  emits: ["testEmit"],
})
export default class HelloWorld extends Vue {
  public test!: object;
  
  public msg!: number;
  
  public haha: string = "ASD";

  created() {
    setTimeout(() => {
      this.haha = "SSSSSSSS";
    }, 2000);
  }

  testClick(): void {
    this.$emit("testEmit", Math.floor(Math.random() * 10));
  }
}
</script>

<style scoped lang="scss">
</style>
