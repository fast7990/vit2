import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
// import axios from './service'
const app = createApp(App);
app.use(router);
app.mount('#app');
