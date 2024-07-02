function add (a, b) {
    return a + b; 
}

console.dir(add); // console.dir()은 함수 객체의 프로퍼티까지 출력 
console.log(add(5, 7))


var sub = function (x, y){ // 일급 객체를 변수에 대입, 해당 변수를 함수처럼 사용할 수 있음 
    return x - y; 
}; 

console.log(sub(5, 10));