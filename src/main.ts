import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import mitt from 'mitt';
import '@/assets/css/init.css';
import '@/assets/font/css/font-awesome.min.css';

const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(router);
app.mount('#app');
