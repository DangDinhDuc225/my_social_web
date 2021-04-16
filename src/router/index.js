import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "../views/Login.vue";
import Forgot_Password from "../views/Forgot_Password.vue";
import Logout from "../views/Logout.vue";
import PersonalFriendPage from "../views/Personal_Friend_Page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/forgot_password",
    name: "Forgot_Password",
    component: Forgot_Password,
  },
  {
    path: "/Personal_Friend_Page",
    name: "Personal_Friend_Page",
    component: PersonalFriendPage,
  },
];

/* 
The default mode for vue-router is hash mode - it uses the URL hash to 
simulate a full URL so that the page won't be reloaded when the URL changes.

To get rid of the hash, we can use the router's history mode, which leverages the 
history.pushState API to achieve URL navigation without a page reload:
*/
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  /*
      Environment Variables
      .env                # loaded in all cases
      .env.local          # loaded in all cases, ignored by git
      .env.[mode]         # only loaded in specified mode
      .env.[mode].local   # only loaded in specified mode, ignored by git
      https://cli.vuejs.org/guide/mode-and-env.html#environment-variables
      */
  routes,
});

export default router;

/*
  cach viet duong dan
  link: https://hoc247.net/hoi-dap/tin-hoc-6/neu-cach-viet-duong-dan-voi-vi-du-cu-the-faq353026.html
  di nguoc ve thu muc cha (ta dung dau .. hoac @)


*/

/* how to disable lint task when git commit
add --no-verify or -n to the end of the git command
*/

/*
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!

*/
