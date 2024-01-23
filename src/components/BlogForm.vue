<template>
  <div>
    <h2 class="title">Add new post</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Post title:</label>
      <input v-model="title" type="text" id="title" required />

      <label for="desc">Post description:</label>
      <textarea v-model="desc" id="desc" required></textarea>

      <button type="submit">Add post</button>
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
<style>
  .title{
    font-size: 36px;
    text-align: center;
  }
  form{
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  input{
    background: #0000005d;
    color: #1EF1B1;
    padding: 10px 5px;
  }
  textarea{
    min-height: 100px;
    background: #0000005d;
    color: #1EF1B1;
  }
  button{
    margin-top: 30px;
    padding: 15px 15px;
    background: #000;
    color: #1EF1B1;
    border: none;
    border-radius: 5px;
    transition: 0.4s;
  }
  button:hover{
    background-color: #fff;
    color: #000;
  }
  @media screen and (max-width: 490px) {
    form{
    width: 90%;
  }
  }
</style>