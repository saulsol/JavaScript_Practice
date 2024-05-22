function foo() {console.log('foo')}

foo();




var add = function add(x, y){
    return x + y; 
};

console.log(add(2, 5));

// 자바 스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 
//거기에 함수 객체를 할당한다. 
