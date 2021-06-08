<template>
  <div 
    class="carousel-item-container" 
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader @load="this.showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" />
    </div>
    <div class="title" ref="title">
      {{ carousel.title }}
    </div>
    <div class="desc" ref="desc">
      {{ carousel.description }}
    </div>
  </div>
</template>
<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props:["carousel"],
  components:{
    ImageLoader,
  },
  data(){
    return {
      titleWidth:0,
      descWidth:0,
      containerSize:null,//外层容器的尺寸
      innerSize:null,//里层图片的尺寸
      mouseX:0,//鼠标的横坐标
      mouseY:0//鼠标的纵坐标
    }
  },
  computed:{
    imagePosition(){
      if(!this.innerSize || !this.containerSize){
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;//多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height;//多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform:`translate(${left}px,${top}px)`
      }
    },
    center(){
      return{
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      }
    }
  },
  mounted(){
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize",this.setSize); 
  },
  destroyed(){
    window.removeEventListener("resize",this.setSize);
  },
  methods:{
    showWords(){
      //标题title
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //让浏览器重新渲染一次
      this.$refs.title.clientWidth;//reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";
      //描述desc
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      //让浏览器重新渲染一次
      this.$refs.desc.clientWidth;//reflow
      this.$refs.desc.style.transition = "1s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";

    },
    setSize(){
    this.containerSize = {
      width:this.$refs.container.clientWidth,
      height:this.$refs.container.clientHeight,
    };
    this.innerSize = {
      width:this.$refs.image.clientWidth,
      height:this.$refs.image.clientHeight,
    }
    },
    handleMouseMove(e){
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container{
  background: @dark;
  width:100%;
  height: 100%;
  color:#fff;
  position: relative;
  overflow: hidden;
}
.carousel-img{
  width: 110%;
  height: 110%;
  left:0;
  top:0;
  position: absolute;
  transition: .3s;
}
.title,.desc{
  position: absolute;
  left:25px;
  color: aqua;
  text-shadow: 1px 1px 3px blue;
  white-space: nowrap;
  overflow: hidden;
  opacity:0;
}
.title{
  top:calc(50% - 45px);
  font-size:35px;
}
.desc{
  top:calc(50% - 8px);
  font-size:25px;
}
</style>