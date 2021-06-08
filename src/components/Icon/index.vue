<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home:"icon-geren1",
    success:"icon-icon-test",
    error:"icon-cuowu",
    close:"icon-guanbi",
    warn:"icon-jinggao",
    info:"icon-xinxi1",
    blog:"icon-Blog",
    code:"icon-Code",
    about:"icon-about",
    weixin:"icon-weixin1",
    mail:"icon-emailmarketing",
    github:"icon-github1",
    qq:"icon-qq",
    arrowUp:"icon-lanlvtubiaozhizuomoban-21",
    arrowDown:"icon-lanlvtubiaozhizuomoban-22",
    empty:"icon-empty",
    chat:"icon-liuyan1",
    tel:"icon-dianhua"
}
export const types = Object.keys(classMap);
export default {
    props:{
        type:{
            type:String,
            required:true
        },
    },
    computed:{
        fontClass(){
            return classMap[this.type];
        }
    }

}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2488229_4xxpond8dmq.css";
</style>