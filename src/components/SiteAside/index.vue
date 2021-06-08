<template>
  <div class="site-aside-container">
      <template v-if="data">
          <Avatar :url="data.avatar" :size="100" />
          <h1 class="title">{{  data.siteTitle }}</h1>
      </template>
      <Menu />
      <Contact v-if="data" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
    components:{
        Avatar,
        Contact,
        Menu,
    },
    computed:mapState("setting",["data"]),
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container{
    width:100%;
    height: 100%;
    background-color: @dark;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}
.avatar-container{
    margin:0 auto;
}
.title{
    font-size: 1em;
    color:aqua;
    text-shadow: 3px 3px 3px blue;
    text-align: center;
}
</style>