import App from './App.vue'

import Vue from 'vue'

import { hunhe,hunhe2 } from './mixin'

//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
    el:'#app',
    render: h => h(App),
})