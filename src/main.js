import { createApp } from 'vue';
import App from './App.vue';
import { db } from './firebase';
import { getAllBlogs, addBlog } from './firebaseService';

const app = createApp(App);

app.config.globalProperties.$db = {
  getAllBlogs,
  addBlog,
};

app.config.globalProperties.$db.db = db;

app.mount('#app');
