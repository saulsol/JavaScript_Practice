var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);v 
}

foo(); 

console.log(x); 


// var, let, const 중복선언 가능 불가능 
function foo(){
    var x = 1; 

    var x = 2; 
    console.log(x); 

    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다. 
}

function foo1(){
    let x = 1; 
    // let x = 1; 

    const c = 1; 
    // const c = 1; 

    // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 
}