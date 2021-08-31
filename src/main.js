import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import utils from './utils'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App);

app.config.globalProperties.$utils = utils;

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
