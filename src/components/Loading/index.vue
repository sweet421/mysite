<template>
  <img :src="loadingUrl" alt="">
</template>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
img{
    .self-center();
}
</style>
<script>
import loadingUrl from "@/assets/loading.svg";
export default {
   data(){
       return {
           loadingUrl,
       }
   }
}
</script>