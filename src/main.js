import Vue from 'vue';
import './plugins/axios'
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';
import router from './router';
import './plugins/element.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
