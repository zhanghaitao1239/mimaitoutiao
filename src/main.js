import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 完整导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入插件
import 'amfe-flexible'
// 将vant挂载到vue插件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
