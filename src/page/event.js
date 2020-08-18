import number from '../util/number'
import appendNumber from './appendNumber'


var n = new number(100);
// var n = new number();

n.onNumberCreated= function(s, isPrime){
    // console.log(s,isPrime)  // 1 true  s为传入的参数
    appendNumber(s,isPrime);
}

// 注册事件
var isStart = false;

window.onclick = function(){  //鼠标左键点击事件
    if(isStart){
        n.stop();
        isStart = false;
    }else{
        n.start();
        isStart= true;
    }
}
