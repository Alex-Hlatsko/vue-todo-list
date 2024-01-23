<template>
  <div id="app">
    <blog-form @update-posts="fetchPosts" />
    <blog-posts :posts="posts" />
  </div>
</template>

<script>
import BlogForm from "./components/BlogForm.vue";
import BlogPosts from "./components/BlogPosts.vue";

export default {
  components: {
    BlogForm,
    BlogPosts,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      this.$db.getAllBlogs().then((posts) => {
        this.posts = posts;
      });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
<style>
body{
  background-color: #1D4B3D;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>