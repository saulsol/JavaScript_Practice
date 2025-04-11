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

const arr6 = [...arr4, ...arr5];
const arr7 = [...arr4];
console.log(arr6);

// 여러 객체 결합
const obj1 = {val1: 10, val2: 20}
const obj2 ={val3: 20, val:40}

// 스프레드 구문을 이용하여 복사
const obj3 = {...obj1};
const obj4 = {...obj1, ...obj2};

console.log(obj4);


// 스프레드 구문을 통한 새로운 배열 생성

