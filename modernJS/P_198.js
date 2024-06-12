// 렉시컬 스코프 

var x = 1;

function foo() {
    var x = 10; 
    bar(); 
}

function bar(){
    console.log(x); 
}

foo(); 
bar();

// 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프이다. 