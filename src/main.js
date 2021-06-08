//入口文件
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "./router"
import "./mock"


// import styles from "./styles/message.module.less";
// console.log(styles);
// var div = document.createElement("div");
// div.className = styles.message;
// div.innerText = "12344";
// document.body.appendChild(div);
//得到组件生成的根DOM 
// function getComponentRootDom(comp,props){
//   const vm = new Vue({
//     render:(h) => h(comp,{ props }),
//   });
//   vm.$mount();
//   return vm.$el;
// }
// import Icon from "./components/Icon";
// var dom = getComponentRootDom(Icon,{ type:"home" });
// console.log(dom);
//向实例注入成员
// Vue.prototype.$sayHello =function(){
//     console.log("Hello")
// }
// import showMessage from "./utils/showMessage";

// window.showMessage = showMessage;
// showMessage("jkjskj");
//import "./api/test";
//import "./api/banner"


import vLoading from "./directives/loading";
Vue.directive("loading",vLoading);
import "./eventBus";
import vLazy from "./directives/lazy";
Vue.directive("lazy",vLazy);
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
import store from "./store";
store.dispatch("setting/fetchSetting");
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//测试
// import * as blogApi from "./api/blog";
// blogApi.getBlogTypes().then((r) => {
//   console.log("博客分类",r)
// })
// blogApi.getBlogs(2,18,3).then((r) => {
//   console.log("博客",r)
// })
//测试
//import * as blogApi from "./api/blog";
// blogApi.getBlog().then((r) => {
//   console.log(r);
// })
// blogApi.postComment({
//   nickname:"昵称",
//   content:"评论内容，纯文本",
//   blogId:"123",
// }).then((r) => {
//   console.log(r);
// })
// blogApi.getComments(1).then((r) => {
//   console.log(r);
// })

// import eventBus from "./eventBus";
// function handler1(data){
//   console.log("handler1",data)
// }
// function handler2(data){
//   console.log("handler2",data)
// }
// eventBus.$on("event1",handler1);
// eventBus.$on("event1",handler2);
// eventBus.$on("event2",handler2);
// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;
// import { getSetting } from "./api/setting";
// getSetting().then((resp) => {
//   console.log(resp);
// })
