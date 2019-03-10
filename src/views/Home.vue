<template>
  <!-- <div>HOME!</div> -->
  <md-card class="card">
    <div class="info">
      <div class="content">
        <div class="header">
        <h2>Kaden Beckstead</h2>
        <h5>Software Engineer</h5>
        <md-divider class="divider"></md-divider>
        </div>
        <div class="contact">
          <div class="item">
          <md-icon>email</md-icon>
          <span class="text">k.j.beckstead@gmail.com</span>
          </div>
          <div class="item">
          <md-icon>public</md-icon>
          <span class="text">kadenbeckstead.com</span>
          </div>
          <div class="item">
          <md-icon>local_phone</md-icon>
          <span class="text">720-394-1056</span>
          </div>
          <div class="item">
          <md-icon>place</md-icon>
          <span class="text">Provo, Utah</span>
          </div>
        </div>
        <div class="icons">
          <a class="social" target="_blank" href="https://www.facebook.com/k.j.beckstead"><i class="fab fa-facebook icon"></i></a>
          <a class="social" target="_blank" href="https://twitter.com/Kaden1"><i class="fab fa-twitter-square icon"></i></a>
          <a class="social" target="_blank" href="https://plus.google.com/+KadenBeckstead"><i class="fab fa-google-plus-square icon"></i></a>
          <a class="social" target="_blank" href="https://www.linkedin.com/in/kaden-beckstead/"><i class="fab fa-linkedin icon"></i></a>
          <a class="social" target="_blank" href="https://github.com/kadenBeckstead"><i class="fab fa-github-square icon"></i></a>
        </div>
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
  min-height: 375px;
  width: auto;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
}
.card {
  display: flex;
  flex-direction: row;
  background-color: rgb(178, 190, 255);
  height: 65vh;
  min-height: 375px;
}

.header {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
}

.divider {
  width: calc(100% + 100px);
  background-color: black;
  margin-bottom: 30px;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 530px;
}
.info {
  display: flex;
  flex-direction: row;
  height: 65vh;
  width: 80%;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.item {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
}

.text {
  margin-left: 15px;
}
.icons {
  margin-top: 30px;
  width: 35%;
  min-width: 250px;
  display: flex;
  justify-content: space-around;
}
.icon {
  font-size: 30px;
}

.social {
  cursor: pointer;
  color: #2C3E50;
}

.social:hover {
  color: rgb(70, 99, 128) !important;
}
</style>
