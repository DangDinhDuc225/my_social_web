<template>
  <div id="personal-page">
    <span class="add-friend" v-on:click="addFriend = !addFriend">{{
      addFriend ? "cancel invitation" : "Add friend"
    }}</span>
  </div>
</template>

<script>
export default {
  name: "PersonalFriendPage",
  data() {
    return {
      addFriend: false,
    };
  },
};
</script>
