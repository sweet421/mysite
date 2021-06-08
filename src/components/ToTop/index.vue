<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
      <img src="https://www.easyicon.net/api/resizeApi.php?id=1311189&size=32" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
        }
    },
    created(){
        this.$bus.$on("mainScroll",this.handleScroll);
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleScroll);
    },
    methods: {
        handleScroll(dom){
            if(!dom){
                this.show = false;
                return;
            }
            this.show = dom.scrollTop >= 500;
        },
        handleClick(){
            this.$bus.$emit("setMainScroll",0);
        },
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container{
    background:@primary;
    width:50px;
    height: 50px;
    position:fixed;
    bottom: 15px;
    right: 15px;
    z-index: 99;
    border-radius: 50%;
    cursor:pointer;
    img{
        position:absolute;
        top:10%;
        left:19%;
    }
}
</style>