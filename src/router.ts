import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/home",
      name: "home",
      component: () =>
        import("./views/Home.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import("./views/Resume.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () =>
        import("./views/Projects.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    }
  ]
});
