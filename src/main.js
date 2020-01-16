import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引用 echarts
import echarts from 'echarts'

// element-ui
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  MenuItem,
  MenuItemGroup,
  Menu,
  submenu,
  Radio,
  RadioGroup,
  RadioButton,
  Icon,
  Tooltip
} from 'element-ui'
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(submenu)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Icon)
Vue.use(Tooltip)
// 配置使用echarts
Vue.use(echarts)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
