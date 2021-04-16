<template>
  <div id="forgot-password">
    <h1>Recovery your account</h1>
    <p>This helps to prove this account really belong to you</p>
    <p>{{ yourEmail }}</p>
    <p>Try the other ways to login</p>
    <div>
      <img src="../assets/icons8-email-64.png" />
      <span class="verification-email"
        >Recieve verification code at {{ yourEmail }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Forgot_Password",
};
</script>
