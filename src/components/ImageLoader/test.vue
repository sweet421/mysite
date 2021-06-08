<template>
  <div class="test-container">
      <ImageLoader 
       src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6a63f6246b600c33ef8b0a3f1a4c510fd8f9a153.jpg"
       placeholder="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6a63f6246b600c33ef8b0a3f1a4c510fd8f9a153.jpg"
       :duration="5000"
       @load="handleLoaded"
       />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
    components:{
        ImageLoader
    },
    methods:{
        handleLoaded(){
            console.log("ImageLoader组件load事件触发，图片加载完成");
        }
    }
}
</script>

<style scoped>
.test-container{
    width:500px;
    height: 400px;
    border: 2px solid;
    margin:0 auto;
}
</style>