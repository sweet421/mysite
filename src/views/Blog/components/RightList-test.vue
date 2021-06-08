<template>
  <div class="test-container">
      <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from './RightList.vue';
export default {
    components: {
        RightList,
    },
    data(){
        return {
            list:[
                {
                    name:"a",
                    isSelect:true,
                    children:[
                        {name:"a-1",isSelect:true,children:[
                            {name:"a-1-1",isSelect:true},
                            {name:"a-1-2",isSelect:false},
                            {name:"a-1-3",isSelect:false}
                        ]}
                    ]
                },
                {name:"b",isSelect:false},
                {name:"c",isSelect:false},
            ]
        }
    },
    methods:{
        handleSelect(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>