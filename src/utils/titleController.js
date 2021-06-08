var routeTitle = "",
    siteTitle = "";
function setTitle(){
    if(!routeTitle && !siteTitle){
        document.title = "loading...";
        return;
    }else if(routeTitle && !siteTitle){
        document.title = routeTitle;
    }else if(!routeTitle && siteTitle){
        document.title = siteTitle;
    }
    else{
        document.title = `${routeTitle}-${siteTitle}`;
    }
}
export default{
    //路由标题
    setRouteTitle(title){
       routeTitle = title;
       setTitle(); 
    },
    //网站标题
    setSiteTitle(title){
        siteTitle = title;
        setTitle();
    }
}