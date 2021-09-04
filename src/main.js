import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Faq from "./components/Faq.vue";
import Shop from "./components/Shop.vue";

// import Router from "./components/Router";

// const routes = [
//   { path: "/", component: Main },
//   { path: "/about", component: About },
//   { path: "/contact", component: Contact },
//   { path: "/faq", component: Faq },
//   { path: "/shop", component: Shop },
//   // { path: "/router", component: Router },
// ];
const router = new VueRouter({
  routes: [
    { path: "/main", component: Main },
    { path: "/", component: Main },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/faq", component: Faq },
    { path: "/shop", component: Shop },
  ],
});

Vue.use(VueRouter);

Vue.config.productionTip = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
