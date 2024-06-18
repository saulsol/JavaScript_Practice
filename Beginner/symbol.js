// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체 프로퍼티 키 
var key = Symbol('key');
console.log(typeof key);


var obj = {}; 
obj[key] = 'value'; 
console.log(obj[key]); 