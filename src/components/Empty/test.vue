<template>
  <div class="test-container">
      <Empty />
  </div>
</template>

<script>
import Empty from './';
export default {
    components:{
        Empty
    }

}
</script>

<style>
.test-container{
    width: 200px;
    height: 200px;
    border: 2px solid;
    margin:30px 10px;
    position: relative;
}
</style>