// 전역 객체 global Object
// 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체

console.log(this); // window(브라우저에서) , node.js 환경에서는 {} 로 뜬다.

// console.log(
//     this === window,
//     window === self,
//     self === frames
// ); // true, true, true(브라우저에서)

console.log(global);
console.log(globalThis);

// 전역 객체에 해당하는 것들 :
// 표준 빌트인 객체
// 호스트 객체 - 환경에서 제공하는 기타 객체들 : 브라우저 Web API, Node.js


