// 분할 대입은 객체나 배열로부터 값을 추출하기 위한 방법

const profile = {
    name: "테스트",
    age: 24
};

// const {name, age} = profile;
//
// console.log(`이름 : ${name}, 나이: ${age}`);


// 일부분 추출
// const {name} = profile;
// console.log(`이름 : ${name}`);


// 배열에서도 분할 대입을 할 수 있다.

const arrayProfile = ["test", 24];

const [name, age] = arrayProfile;
console.log(`이름 : ${name}, 나이: ${age}`);