<template>
  <!-- <div>HOME!</div> -->
  <md-card class="card">
    <div class="info">
      <div class="content">
        <h2>Hi, I'm Kaden</h2>
        <h5>Software Engineer & Student</h5>
        <md-divider class="divider"></md-divider>
        <md-icon>email</md-icon>
      </div>
    </div>
    <img class="photo" src="../assets/temple.jpg">
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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
}
.card {
  display: flex;
  flex-direction: row;
  background-color: rgb(178, 190, 255);
  height: 65vh;
  min-height: 300px;
}

.divider {
  width: 80%;
  background-color: black;
  margin-bottom: 30px;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 45%;
}
.info {
  display: flex;
  flex-direction: row;
  height: 65vh;
  width: 80%;
  /* background-color: green; */
  /* -webkit-clip-path: polygon(0 0, 64% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%); */
}
</style>
