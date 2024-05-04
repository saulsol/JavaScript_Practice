var result = 5/2; 
console.log(result);

var result = '5' == 5; 
console.log(result); // true

// 동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적으로 타입 변환을 통해 
// 타입을 일치시킨 후 같은 값인지 비교한다. 
// 동등비교 연산자는 예측하기 어려운 결과를 만들어 낸다. 
// 따라서 일치비교(===)를 사용하는 것이 좋다. 

var result = '5' === 5;
console.log(result); // false