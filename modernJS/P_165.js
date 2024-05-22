
console.dir(add);
console.dir(sub); 






// 함수 선언문, 자바스크립트 엔진에 의하여 함수 객체로 할당이 된다.
//(런타임엔 이미 함수 객체 생성되어 있음) 
function add(x, y) {
    return x + y; 
}


// var 키워드를 사용해서 표현식으로 사용한 함수 표현식 
// var 키워드를 사용했기에 런타임에 undifined로 할당이 되어있다. 
var sub = function (x, y) {
    return x - y; 
}