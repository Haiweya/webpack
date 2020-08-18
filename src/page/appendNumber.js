import retColor from '../util/retColor'

import {getRandom} from '../util/retColor'

import $ from 'jquery'

var divContainer = $('#divContainer');
var divCenter = $('#divCenter');

export default function(n,isPrime){
    console.log(n,isPrime);
    var span = $('<span>').text(n);//生成一个span 其中的文字为n
    // 如果这个数字为素数的话
    if(isPrime){
        var color = retColor();
        span.css("color",color);
        // 产生中间的素数
        generateCenterPrime(n,color);
    }
    divContainer.append(span);
    generateCenter(n);
}
function generateCenter(n){
    divCenter.text(n);
}

// 中间产生一个素数
function generateCenterPrime (n,color){
    var div = $('<div>').addClass('center').css('color',color).text(n);
    $('body').append(div);
    getComputedStyle(div[0]).left;//只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow
    div.css("transform", `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`).css("opacity", 0)
}