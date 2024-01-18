<template>
  <div>
    <h2>Посты</h2>
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
  props: {
    posts: Array,
  },
};
</script>
