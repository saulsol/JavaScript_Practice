

const class1 = {
    x: 1,
    y: { a: 2},
    z: [3, 4]
}

const class2 = { ...class1 }; // class1의 요소들을 복사받음

class1.x++;
class1.y.a++; 
class1.z[0]++; 

console.log(class1);
console.log(class2); 

// 해당 객체 바로 안쪽의 값은 복제하지만 참조값은 같은 값을 가리킴 (안에 있는 객체의 주소만 복사)
// 원시값만 있는 객체만 값에 의한 복사 (얕은 복사)

