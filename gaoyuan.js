/*Data:2017/12/25*/
/*Author:高原*/
/*Info：一些动画方面的封装*/

//scrollTop的兼容性封装
function scroll(){
    if(window.pageYOffset !==undefined){
        return{
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    }else if(document.compatMode === "CSS1Compat"){
        return{
            "top":document.documentElement.scrollTop,
            "left":document.documentElement.scrollLeft
        }
    }else{
        return{
            "top":document.body.scrollTop,
            "left":document.body.scrollLeft
        }
    }
}
//缓动动画的封装
//function animate1(ele,target,off,leto){
//    clearInterval(ele.timer);
//    ele.timer = setInterval(function(){
//        var step = (target-ele.off)/10;
//        step = target>ele.off?Math.ceil(step):Math.floor(step);
//        ele.style.leto = ele.off + step + "px";
//        if(Math.abs(target-ele.off)<=Math.abs(step)){
//            ele.style.leto = target + "px";
//            clearInterval(ele.timer);
//        }
//    },30)
//    }
function animate1(ele,target){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var step = (target-ele.offsetTop)/10;
        step = target>ele.offsetTop?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        if(Math.abs(target-ele.offsetTop)<=Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },30)
}
