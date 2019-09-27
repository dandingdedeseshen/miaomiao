import Vue from 'vue';
import router from './router'
import app from './app.vue'
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './font/iconfont.css'


Vue.use(Mint);
Vue.use(VueRouter)


var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router,
})
