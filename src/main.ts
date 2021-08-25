import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/init.css';
import '@/assets/font/css/font-awesome.min.css';

createApp(App)
  .use(router)
  .mount('#app');
