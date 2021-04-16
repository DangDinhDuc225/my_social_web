import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/* 
$mount allows you to explicitly mount the Vue instance when 
you need to. This means that you can delay the mounting of 
your vue instance until a particular element exists in your 
page or some async process has finished, which can be particularly
useful when adding vue to legacy apps which inject elements 
into the DOM, I've also used this frequently in testing 
(See Here) when I've wanted to use the same vue instance 
across multiple tests:


// Create the vue instance but don't mount it
const vm = new Vue({
  template: '<div>I\'m mounted</div>',
  created(){
    console.log('Created');
  },
  mounted(){
    console.log('Mounted');
  }
});

// Some async task that creates a new element on the page which we can mount our instance to.
setTimeout(() => {
   // Inject Div into DOM
   var div = document.createElement('div');
   div.id = 'async-div';
   document.body.appendChild(div);

  vm.$mount('#async-div');
},1000)
*/
