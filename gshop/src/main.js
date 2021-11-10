import Vue from "vue";
import { Button } from 'mint-ui'
import App from './App.vue'
import router from './router/index'
import store from "./store";

import './mock/mockServer' // 加载 mockServer 即可

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})