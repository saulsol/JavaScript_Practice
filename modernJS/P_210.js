console.log(foo); // undifined 

foo = 123;

console.log(foo);  // 123  

var foo; 


let x = 10; 
// let x = 25;  let 이나 const는 중복 선언이 불가능하다.

//  let 키워드로 선언된 변수는 블록 레벨 스코프를 갖는다. 
{
    let x = 10; //  상단에 있는 변수 x와는 다른 값이다. 
}