<template>
  <div id="login">
    <Form />
    <div>
      <router-link to="/forgot_password">You forgot your password</router-link>
      <button>Next</button>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form.vue";

export default {
  name: "Login",
  components: {
    Form,
  },
};
</script>
