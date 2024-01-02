<template>
  <div>
    <h2>Create a new blog post</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required>
      
      <label for="content">Content:</label>
      <textarea id="content" v-model="content" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit-post', { title: this.title, content: this.content });
      this.title = '';
      this.content = '';
    }
  }
};
</script>

<style scoped>
/* Add your component styles here */
</style>
