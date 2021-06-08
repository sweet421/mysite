<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
    components:{
        Menu,
    },
}
</script>

<style>
.test-container{
    width:220px;
    height: 400px;
    border:2px solid blueviolet;
    background-color: #000;
    margin:100px 0;
}
</style>