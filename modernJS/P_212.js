console.log(foo); 
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다. 

let foo; 
console.log(foo); // undifined

foo = 1; 
console.log(foo);  