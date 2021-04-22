<template>
        <form
          id="form"
          @submit="checkForm"
          action="https://vuejs.org/"
          method="post"
        >

          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
            </ul>
          </p>

          <p>
            <label for="your-email">your email</label>
            <input
              id="your-email"
              v-model="yourEmail"
              type="email"
              name="your-email"
            ><!-- The name attribute specifies the name of an <input> element.-->
          </p>

          <p>
            <label for="password">password</label>
            <input 
              id="password"
              v-model="password"
              type="password"
              name="password"
            >
          </p>

          <p>
            <input 
              type="submit"
              value="Sign up"
            >
          </p>

        </form>
</template>

<script>
// import, export la gi
/* 


*/ 
export default {
  name: "FormLogin",
  data() {
    return {
      errors: [],
      yourEmail: null,
      password: null
    }
  },
  methods: {
    checkForm(e) {
      if (this.yourEmail && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.yourEmail) {
        this.errors.push('Email required.');
      }
      if (!this.password) {
        this.errors.push('password required');
      }

      e.preventDefault();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #form {
        font-size: 20px;
    }
</style>
