<template>
  <!-- <div>HOME!</div> -->
  <md-card class="card">
    <div class="poly"></div>
    <img class="photo" src="../assets/steps.jpg">
  </md-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="css">
.photo {
  height: 65vh;
  min-height: 300px;
  width: auto;
}
.card {
  display: flex;
  flex-direction: row;
  background-color: rgb(165, 165, 165);
  height: 65vh;
  min-height: 300px;
}
.poly {
  height: 65vh;
  width: 80%;
  background-color: green;
  -webkit-clip-path: polygon(0 0, 64% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
}
</style>
