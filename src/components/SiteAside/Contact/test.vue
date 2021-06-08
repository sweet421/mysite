<template>
    <div class="test-container">
        <Contact />
    </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
    components:{
        Contact,
    },
}
</script>

<style>
.test-container{
    position: relative;
    width:200px;
    height: 300px;
    margin: 100px 0;
    border: 2px solid blueviolet;
    background:#000;
    padding-top:100px;
}
</style>