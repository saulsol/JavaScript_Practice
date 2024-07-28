const obj1 = {
    x: 1, y: 2, z: 3
}

// const {x, y, z} = obj1; // 디스트럭처링, 구조 분해 할당 
// console.log(x, y, z); 

// 일부만 가져오는 것도 가능 
const {x, y} = obj1;
console.log(x, y); 


const array1 = [1, 2, 3, 4, 5];
const {length} = array1;
console.log(length);   