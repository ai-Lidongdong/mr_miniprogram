import Vue from 'vue'
import App from './App'
import store from './store.js'
import 'mpvue-weui/src/style/weui.css';
import '../static/iconfont/iconfont.css'
import MyPlugin from '../mixins'

import { post } from './utils/request.js'
Vue.prototype.$post = post

Vue.use(MyPlugin)
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;

Vue.filter('toFixeds', function(value) {
    // if (!value) return 0;
    return 100.00;
})

//用户是否登录 未登录跳转到登录页面,登录后判断session_key(==token)是否失效，失效重新wxlogin()
const token = wx.getStorageSync('token'); //获取来自主页弹框登录的token
console.log('token:' + token);
if (!token) {
    const url = 'pages/authorize/main'
    wx.navigateTo({ url })
} else {

}




const app = new Vue(App)
app.$mount()