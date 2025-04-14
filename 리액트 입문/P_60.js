// map 함수에서는 배열을 순서대로 처리한 결과를 배열로 받을 수 있다.
const fruitArr = ["apple", "orange", "grape"];

const arr = fruitArr.map((name) => {return name;})

console.log(arr);

// 배열 안에서 특정한 조건에 일치하는 것을 추출해서 처리하고 싶은 경우에 filter() 사용
const numArr = [1, 2, 3, 4, 5]

const numResultArr = numArr.filter((num) => {return num % 2 === 1})
console.log(numResultArr);

// index 활용
fruitArr.map((fruit, index) => {
    console.log(`${index + 1} :  ${fruit}입니다. `) ;
})
// map 함수의 두 번째 인수를 넣을 수 있으면 넣는 위치에 0부터 순서대로 index 정보가 보장됩니다.