import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
// export default {
//     bind(el,binding){
//         //根据binding.value的值，决定创建或删除img元素

//     },
//     update(el,binding){
//         //根据binding.value的值，决定创建或删除img元素
        
//     }
// }
//得到el中loading效果的img元素
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading]");
}
function createLoadingImg(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}
//当bind和update的处理效果一样的时候，可以配置简化如下：
export default function(el,binding){
    //根据binding.value的值，决定创建或者删除img元素
    const curImg = getLoadingImage(el);
    if(binding.value){
        if(!curImg){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}