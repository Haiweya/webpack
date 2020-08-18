/***
 * 判断是否是素数,只能被1和自身整除的数为素数
 */

 export default function (n){
     if(n<2){
        return false;
     }
    for(let i=2; i<n; i++){
        if(n%i == 0){
            return false
        }
    }
    return true;
 }


 