<template>
  <div>
    <h2>Добавить новый пост</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Заголовок поста:</label>
      <input v-model="title" type="text" id="title" required />

      <label for="desc">Описание:</label>
      <textarea v-model="desc" id="desc" required></textarea>

      <button type="submit">Добавить пост</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
    };
  },
  methods: {
    submitForm() {
      this.$db.addBlog(this.title, this.desc).then(() => {
        this.title = "";
        this.desc = "";
        this.$emit("update-posts");
      });
    },
  },
};
</script>
