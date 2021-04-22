<template>
  <div class="home">
    <img src="../assets/icons8-social-network-64.png" />
    <SearchFriends />
    <PostStatus />
    <div v-if="$store.state.showPostScreen === true">
      <PostStatusScreen />
    </div>
    <div v-if="$store.state.showPost === true">
      <MyPosted
        v-for="item in $store.state.postArray"
        v-bind:key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFriends from "../components/Search_Friends";
import PostStatus from "../components/Post_status";
import PostStatusScreen from "../components/Post_Status_Screen";
import MyPosted from "../components/My_Posted";

export default {
  name: "Home",
  components: {
    SearchFriends,
    PostStatus,
    PostStatusScreen,
    MyPosted,
  },
};
</script>
