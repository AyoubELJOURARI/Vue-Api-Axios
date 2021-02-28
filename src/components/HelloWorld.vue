<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<div v-for="post in items" :key="post.id">-->
    <div v-for="post in AllItems" :key="post.id">
      <h3>Post Title:</h3>
      {{post.title}}
      <h3>Post Body:</h3>
      {{post.body}}
    </div>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Use of Api"
    };
  },

  computed: {
    ...mapGetters(["AllItems"])
    //or this
    //items() {
    //  return this.$store.state.items;
    //}
  },
  mounted() {
    this.$store.dispatch("getItems");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
