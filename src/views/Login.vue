<template>
  <div id="login">
    <FormLogin />
    <div class="forgot-password">
      <router-link to="/forgot_password">You forgot your password</router-link>
      <button>Next</button>
    </div>
    <router-link to="/register">Create a new account</router-link>
  </div>
</template>

<script>
import FormLogin from "../components/Form_Login.vue";

export default {
  name: "Login",
  components: {
    FormLogin,
  },
  data() {},
};
</script>
