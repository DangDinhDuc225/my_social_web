<template>
  <div id="my-posted">
    <div class="your-informations">
      <img src="../assets/icons8-person-64.png" />
      <div>
        <div>your name</div>
        <div>Time you posted</div>
      </div>
    </div>
    <div class="post">
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPosted",
  props: ["item"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.your-informations {
  display: flex;
  flex-direction: row;
  position: relative;
}
.your-informations > div {
  position: absolute;
  bottom: 0;
  left: 64px;
}
</style>
