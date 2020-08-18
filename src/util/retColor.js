var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];

// 产生min 到max 之间的随机数
export function getRandom(min,max){
    return Math.floor( Math.random() * (max-min) + min )
 }

//  返回一个随机颜色
export default function (){
   return  colors[getRandom(0,colors.length)];
}
