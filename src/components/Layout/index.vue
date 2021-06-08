<template>
  <div class="layout-container">
  <div class="left">
      <slot name="left"></slot>
  </div>
  <div class="middle">
      <slot name="middle"></slot>
  </div>
  <div class="right">
      <slot name="right"></slot>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang=less>
.layout-container{
    width: 100%;
    height: 100%;
    display: flex;
    .left, .right{
        flex:0 0 auto;
        overflow: hidden;
    }
    .middle{
        flex:1 1 auto; //可以增长 也可以压缩
        overflow: hidden;
    }
}
</style>