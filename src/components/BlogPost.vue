<template>
  <div>
    <h2>Blog Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    const blogs = await this.$db.getAllBlogs();
    this.posts = blogs;
  }
};
</script>

<style scoped>
/* Add your component styles here */
</style>
