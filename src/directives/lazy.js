import eventBus from "@/eventBus";
import { debounce } from "@/utils";

let imgs = [];
function setImage(img){
    img.dom.src = "https://github.com/DuYi-Edu/DuYi-Vue2/blob/main/1.%20%E5%85%A5%E9%97%A8/31.%20%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD/%E8%AF%BE%E5%A0%82%E4%BB%A3%E7%A0%81/my-site/src/assets/default.gif?raw=true"
    //处理图片
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 100;
    if(rect.top >= -height && rect.top <= clientHeight){
        //在视口范围内
        img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img)
    }
}
function setImages(){
    for (const img of imgs) {
        setImage(img);
    }
}
function handleScroll(){
    setImages();
}

eventBus.$on("mainScroll",debounce(handleScroll,50))
export default {
    inserted(el,bindings){
        const img = {
            dom:el,
            src:bindings.value,
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el){
        imgs = imgs.filter(img => img.dom !== el);
    }
};