<template>
  <div class="empty-container">
      <Icon type="empty" />
      <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "../Icon"
export default {
    components:{
        Icon
    },
    props:{
        text:{
            type:String,
            default:"无数据"
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
    .self-center(absolute);
    color: @gray;
    text-align: center;
}
.icon-container{
    font-size:100px;
}
</style>