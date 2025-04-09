const arr = [1, 2];

const summaryFunc = (num1, num2) => console.log(num1 + num2);

summaryFunc(arr[0], arr[1]);

summaryFunc(...arr);

// 스프레드 구문은 요소를 모으는 데도 사용할 수 있다.
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

console.log(num1);
console.log(num2);
console.log(arr3);

// 스프레드 구문을 이용해 새로운 배열 생성
const arr4 = [10, 20];
const arr5 = [30, 40];