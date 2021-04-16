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
            <label for="your-name">your name</label>
            <input
              id="your-name"
              v-model="yourName" 
              type="text"
              name="your-name"
            ><!-- The name attribute specifies the name of an <input> element.-->
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
            <label for="confirm-password">confirm-password</label>
            <input 
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              name="confirm-password"
            >
          </p>

          <p>
            <input 
              type="submit"
              value="Submit"
            ><!-- The value attribute specifies the value of an <input> element.
              The value attribute is used differently for different input types:
              +, For "button", "reset", and "submit" - it defines the text on the button
              +, For "text", "password", and "hidden" - it defines the initial (default)
              value of the input field
              +, For "checkbox", "radio", "image" - it defines the value associated with
              the input (this is also the value that is sent on submit)
            -->
          </p>
          
        </form><!-- The method attribute specifies how to send form-data 
          (the form-data is sent to the page specified in the action attribute). -->
</template>

<script>
// import, export la gi
/* 


*/ 
export default {
  name: "Form",
  data: function() {
    return {
      errors: [],
      yourName: null,
      yourEmail: null,
      password: null,
      confirmPassword: null
    }
  },
  /* components: {
      HelloWorld,
    },
    day la cu phap, sau khi dang ki component o cap cuc bo, de su dung component
    ta phai su dung cu phap nay,

    Lưu ý rằng bạn sẽ không truy xuất được đến các component được 
    đăng kí cục bộ từ các component con. Ví dụ, nếu như bạn muốn sử dụng 
    ComponentA trong ComponentB, bạn phải khai báo như sau:
    var ComponentA = {  }

    var ComponentB = {
      components: {
        'component-a': ComponentA
      },
    }

    Hoặc nếu bạn sử dụng module ES2015 (thông qua Babel hay Webpack):

      import ComponentA from './ComponentA.vue'

      export default {
        components: {
          ComponentA
        },
        // ...
      }

  */


  // props: {
  //   errors: [],
  //   yourName: null,
  //   password: null,
  //   confirmPassword: null
  // },

/* khi dung props thi trinh duyet bao errors, yourName,... undefined, 
  PROPS
  truyen du lieu xuong component con bang prop
*/

// lam sao de hien o tren app


  methods: {
    checkForm: function (e) {
      if (this.yourName && this.yourEmail && this.password && this.confirmPassword) {
        return true;
      }

      this.errors = [];

      if (!this.yourName) {
        this.errors.push('Name required.');
      }
      if (!this.yourEmail) {
        this.errors.push('Email required.');
      }
      if (!this.password) {
        this.errors.push('password required');
      }
      if (!this.confirmPassword) {
        this.errors.push('confirm Password required');
      }

      e.preventDefault();
      // The preventDefault() method cancels the event if it is cancelable, 
      //meaning that the default action that belongs to the event will not occur.

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
