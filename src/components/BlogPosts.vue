<template>
  <div>
    <h2 class="title">Posts</h2>
    <ol>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.desc }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
};
</script>
<style>
li{
  border-bottom: 1px solid #fff;
}
</style>