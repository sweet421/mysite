import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";

if(!window.VueRouter){
  Vue.use(VueRouter);//使用一个插件
}
const router = new VueRouter({
  //配置
  //routes:路线,即路由匹配规则
  routes,
  mode:"history"
});

router.afterEach((to,from) => {
  if(to.meta.title){
    titleController.setRouteTitle(to.meta.title);
  }
})
export default router;