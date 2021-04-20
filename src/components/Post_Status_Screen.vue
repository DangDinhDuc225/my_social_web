<template>
  <div id="post-status">
    <p>create post</p>
    <div class="your-avatar">
      <div class="your-informations">
        <img src="../assets/icons8-person-64.png" />
        <div>
          <div>your name</div>
          <div>friends</div>
        </div>
      </div>
      <div class="content-post">
        <textarea
          name="enter-content"
          cols="40"
          rows="10"
          v-model="post"
        ></textarea>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>Add to the post</div>
      <button v-on:click="postFunction">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostStatusScreen",
  data: function () {
    return {
      post: "",
    };
  },
  methods: {},
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
.content-post > textarea {
  outline: none;
  border-style: none;
}
</style>
