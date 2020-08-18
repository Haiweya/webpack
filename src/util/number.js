import isPrime from './isPrime';

/**
 * 产生数据，并且判断是否为素数
 */

 export default class {
     constructor(duration = 500){
        this.duration = duration;
        this.number = 1,
        this.onNumberCreated = null,  //当一个数字产生的时候要调用的回调函数
        this.IdTimer = null
     }
     start(){
        if(this.IdTimer){
            return
        }
        this.IdTimer = setInterval(()=>{
            this.onNumberCreated && this.onNumberCreated(this.number,isPrime(this.number));
            this.number++;
        },this.duration)

     }

     stop(){
         clearInterval(this.IdTimer);
         this.IdTimer = null;
     }
 }