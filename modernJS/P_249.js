// 1. 함수는 무명의 리터럴로 생성할 수 있다. 
// 2. 함수는 변수에 저장할 수 있다. 

// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다. 
const increase = function (num){
    return ++num; 
}

const decrease = function (num){
    return --num;
}

// 2)함수는 객체에 저장할 수 있다. 
const auxs = {increase, decrease};

// 3) 함수의 매개변수에 전달할 수 있다. 
function makeCounter(auxs){
    let num = 0;

    return function (){
        num = auxs(num);
        return num; 
    }
}


const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(increaser()); // 3

