import { createApp } from 'vue';
import App from './App.vue';
import { getAllBlogs } from './firebaseService';

const app = createApp(App);

// Передаем экземпляр db как глобальную переменную в приложение
app.config.globalProperties.$db = {
  getAllBlogs
};

app.mount('#app');
