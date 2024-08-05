// 래퍼 객체 (wrapper object)

// const str = 'abcde';
// console.log(
//     str.length,
//     str.toUpperCase(),
//     str[0]
// );
//
// const num = 123.4567;
// console.log(
//     typeof num.toString(),
//     num.toFixed(2) // 매개변수 자리까지 반올림
// );


const str = new String('aavdsrs');
const num = new Number(123.456);
const bool = new Boolean(true);

console.log(typeof str, typeof num, typeof bool);

// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생


// valueOf
console.log(str.valueOf(), num.valueOf(), bool.valueOf());

