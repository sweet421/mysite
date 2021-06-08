<template>
  <div class="pager-container" v-if="pageNumber > 1">
      <a  @click="handleClick(1)" :class="{disabled:current === 1}">|&lt;&lt;</a>
      <a  @click="handleClick(current - 1)" :class="{disabled:current === 1}">&lt;&lt;</a>
      <a  @click="handleClick(n)" v-for="(n,i) in numbers" :key="i" :class="{active:n === current}">{{n}}</a>
      <a  @click="handleClick(current + 1)" :class="{disabled:current === pageNumber }">&gt;&gt;</a>
      <a  @click="handleClick(pageNumber)" :class="{disabled:current === pageNumber}">&gt;&gt;|</a>
  </div>
</template>

<style lang="less" scoped>
//~@:在样式里表示src目录 如果是在脚本里表示src目录，使用的是~
@import "~@/styles/var.less";
    .pager-container{
        display: flex;
        justify-content:center;
        margin: 20px 0;
        a{
            cursor: pointer;
            color:@primary;
            margin:0 6px;
            &.disabled{
                color:@lightWords;
                cursor: not-allowed;
            }
            &.active{
                color:@words;
                font-weight: bold;
                cursor:text;
            }
        }
    }
</style>

<script>
export default {
    props:{
        //当前页码
        current:{
            type:Number,
            default:1
        },
        //总数据量
        total:{
            type:Number,
            default:10,
        },
        //页容量
        limit:{
            type:Number,
            default:10
        },
        //一页可见的数量
        visibleNumber:{
            type:Number,
            dafault:10
        }

    },
    computed:{
        //页码数：数据总量除以页容量
        pageNumber(){
            return Math.ceil(this.total /this.limit);
        },
        //得到页面中显示的最小数字，用当前数字减去可显示的数量的一半
        visibleMin(){
            let min = this.current - Math.ceil(this.visibleNumber / 2);
            if(min < 1){
                min = 1;
            }
            return min;
        },
        //页面中显示的最大数字
        visibleMax(){
            let max = this.visibleMin + this.visibleNumber - 1;
            if(max > this.pageNumber){
                max = this.pageNumber;
            }
            return max;
        },
        //显示的页码传入一个数组
        numbers(){
            let nums = [];
            for(let  i = this.visibleMin;i <= this.visibleMax;i++){
                nums.push(i);
            }
            return nums;
        }
    },
    methods:{
        handleClick(newPage){
            if(newPage < 1){
                newPage = 1;
            }
            if(newPage > this.pageNumber){
                newPage = this.pageNumber;
            }
            if(newPage === this.current){
                return;
            }
            //$emit:表示在组件中抛出一个事件
            this.$emit("pageChange",newPage);
        }
    }

}
</script>