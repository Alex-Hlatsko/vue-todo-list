<template>
  <div id="app">
    <BlogForm @submit-post="addPost" />
    <BlogPost :posts="blogPosts" />
  </div>
</template>

<script>
import BlogForm from './components/BlogForm.vue';
import BlogPost from './components/BlogPost.vue';

export default {
  components: {
    BlogForm,
    BlogPost
  },
  data() {
    return {
      blogPosts: []
    };
  },
  methods: {
    addPost(newPost) {
      this.blogPosts.push(newPost);
    }
  }
};
</script>

<style>
/* Add your component styles here */
</style>
