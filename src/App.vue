<template>
  <div class="content" id="app">
    <nav class="nbar navbar navbar-expand-lg navbar-light bg-light">
      <div class="toolbar">
        <a class="navbar-brand">
          <router-link to="/home">
            <span class="page-title">Kaden Beckstead</span>
          </router-link>
        </a>
        <div class="mobile-button">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
      </div>
      <div class="links collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/home" active-class="active">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/about" active-class="active">About Me</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/resume" active-class="active">Resume</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/projects" active-class="active">Projects</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="page-content">
      <router-view/>
    </div>
    <footer>
      <p>Created by: Kaden Beckstead</p>
      <a href="https://github.com/kadenBeckstead/creative-3" target="_blank">View Code Here</a>
    </footer>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>-->
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

:root {
  --toolbar: #4e65e0;
  --navigation: #848fa5;
  --active: #ded9e2;
  --light-accent: #e5dcc5;
  --off-white: #f7f4ea;
  --accent: #ff65d0;
}

body {
  font-size: 16px !important;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

a {
  color: white !important;
  text-decoration: none !important;
}

a:hover {
  color: var(--accent) !important;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(92, 92, 92);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  width: 9px;
  background: rgb(102, 101, 101);
}

.content {
  display: flex;
  flex-direction: column;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75px;
  text-align: center;
  background-color: var(--toolbar);
  color: var(--off-white);
}

.carousel {
  height: 100%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  background-size: 100%, 100%;
  border-radius: 50%;
  background-image: none;
}

.carousel-control-next-icon:after {
  content: ">";
  font-size: 55px;
  color: black;
}

.carousel-indicators {
  color: black;
}

.carousel-control-prev-icon:after {
  content: "<";
  font-size: 55px;
  color: black;
}

.page-title {
  color: white;
}

.toolbar {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 70%;
}

.mobile-button {
  display: flex;
  justify-content: flex-end;
}

.bg-light {
  background-color: var(--toolbar) !important;
}

.nbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
}

.links {
  justify-content: flex-end;
  background-color: var(--toolbar);
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: var(--accent) !important;
}

.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
  color: var(--accent) !important;
}

.active {
  color: var(--accent) !important;
}

.page-content {
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  margin: 70px 20px 0px 20px;
  overflow: hidden;
}

.list-space {
  margin-top: 40px;
}

.section-space {
  margin-top: 60px;
}

.small-space {
  margin-top: 20px;
}

@media only screen and (max-width: 990px) {
  .toolbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .page-content {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: 70px 70px 0px 75px;
    overflow: hidden;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  created() {
    if (this.$router.currentRoute.path === "/") {
      this.$router.push("/home");
    }
  }
})
export default class App extends Vue {}
</script>