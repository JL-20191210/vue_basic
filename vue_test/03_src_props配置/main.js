import App from './App.vue'

import Vue from 'vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
})