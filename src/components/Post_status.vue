<template>
  <div id="post-status">
    <p>create post</p>
    <div class="your-avatar">
      <img src="../assets/icons8-person-64.png" />
      <span>your name</span>
      <input
        type="text"
        placeholder="Hey guy, what are you thinking?"
        v-on:click="$store.state.showPostScreen = !$store.state.showPostScreen"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostStatus",
  data() {
    return {};
  },
};
</script>
