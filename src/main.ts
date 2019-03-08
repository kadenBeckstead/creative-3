import Vue from "vue";
import BootstrapVue from "bootstrap-vue"
import App from "./App.vue";
import router from "./router";
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial)
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
