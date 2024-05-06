import App from './App.vue'

import Vue from 'vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用（使用）插件
new Vue({
    el:'#app',
    render: h => h(App),
})