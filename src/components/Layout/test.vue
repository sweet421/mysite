<template>
  <div class="test-container">
    <Layout>
      <template #left>
          <div class="left">
              左
          </div>
      </template>
      <template #middle>
          <div class="middle">
              中
          </div>
      </template>
      <template #right>
          <div class="right">
              右
          </div>
      </template>
    </Layout>
  </div>
  
</template>

<script>
import Layout from "./";
export default {
    components:{
        Layout,
    }
}
</script>

<style scoped>
.test-container{
    width: 1000px;
    height: 600px;
    border: 2px solid;
    margin: 0 auto;
}
.left{
    width: 500px;
    height: 100%;
    background-color: aqua;
}
.middle{
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}
.right{
    width:300px;
    height: 100%;
    background-color: blueviolet;
}
</style>