<template>
  <div class="home">
    <div>Home:{{ msg }}</div>
    <HelloWorld :msg="msg" :test="test" @testEmit="testEmit" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

interface Test {
  name: string;
  age: number;
}

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public test: Test = {
    name: "haha",
    age: 123,
  };
  public msg: number = 123123;

  public testEmit(num: number): void {
    this.msg = num;
  }
}
</script>
