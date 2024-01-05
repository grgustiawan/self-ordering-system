import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '../public/assets/css/tamani.css'

const app = createApp(App);

// app.config.globalProperties.tamani = 'http://139.0.5.108:8872/api/web';
app.config.globalProperties.assets = 'http://tamani-app.test/assets';
app.config.globalProperties.testToken = 'MTkyLjE2OC4wLjE7SjMyO0UwMTswOToxMw==';

app.config.globalProperties.tamani = 'https://172.30.14.92:8013/api/web'

app.use(store).use(router).mount('#app');
