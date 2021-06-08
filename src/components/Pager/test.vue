<template>
  <div id='div1'>
    <Pager  :visibleNumber="visibleNumber"
            :total="total"
            :current="current" 
            @pageChange="handlepageChange" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components:{
    Pager
  },
  data(){
    return{
      current:12,
      total:200,
      visibleNumber:10
    }

    
  },
  methods:{
    handlepageChange(newPage){
        this.current = newPage;
    }
  }
}
</script>
<style scoped>
</style>