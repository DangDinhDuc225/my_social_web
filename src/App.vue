<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- 
        <router-link> is the component for enabling user navigation in a router-enabled app. 
          The target location is specified with the to prop. It renders as an <a> tag with correct href by default,
          but can be configured with the tag prop. 
          In addition, the link automatically gets an active CSS class when the target route is active.
       -->
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
    <!-- 
      The <router-view> component is a functional component that renders the matched component for the given path. 
      Components rendered in <router-view> can also contain their own <router-view>, 
      which will render components for nested paths.
     -->
  </div>
</template>

<style></style>
