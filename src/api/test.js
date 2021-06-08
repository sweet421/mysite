import axios from "axios";


async function getNews(){
    const resp = await axios.get("/sc-profiler")
    //完整的路径为:http://localhost:8080/sc-profiler   因为http://localhost:8080可以省略 省略协议就会使用当前网站的协议，省略属性名和端口号，就会使用当前网站的属性名和端口号
    console.log(resp);
}
getNews();