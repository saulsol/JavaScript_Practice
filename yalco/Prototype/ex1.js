// 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍을 지원하는 언어 


// 자바스크립트의 모든 객체는 Prototype을 가짐. 
// const obj = {}; 
// console.log(obj); // 브라우저에서 실행하면 보인다. 

// console.log(obj.toString()); 
// console.log(obj.valueOf()); 
// 빈 객체임에도 불구하고 위의 메서드들이 사용 가능한 것은 프로토타입 때문 


// 프로토타입 체인 : 특정 객체에 호출된 프로퍼티가 없다면 프로토타입을 거슬러 올라감 
// console.log(Object.getPrototypeOf({}))

// 생성자 함수에서는 protoType으로 프로토타입 접근 가능 
// function 으로 선언하면 생성자 함수가 될 수 있음 
function Person (name) {
    this.name = name; 
}

console.log(Person.prototype);
