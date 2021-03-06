// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/permission'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Utils from './utils'
import './assets/styles/index.css'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Utils);
Vue.use(VueParticles);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
