<template>
  <div class="app-container">
    <Layout>
    <template #left>
      <div class="left">
        <SiteAside />
      </div>
    </template>
    <template #middle>
      <router-view />
    </template>
  </Layout>
  <ToTop />
  </div>
</template>
<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  components:{
    Layout,
    SiteAside,
    ToTop,
  }
}
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed);
  background: rgb(157, 243, 243);
}
.left{
  width:300px;
  height: 100%;
}
</style>
