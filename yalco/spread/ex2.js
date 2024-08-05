const class1 = {
    a: 1, b: 'A', c: true
}

const class2 = {
    d: {x: 10, y: 100}, e: [1,2,30]
}

const class3 = {
    ...class1, z: 0
}

const class4 = {
    ...class2, ...class3, ...class2.d
}

console.log(class3); 
console.log(class4); 




const class5 = {
    ...{a: 1, b: 2},
    ...{b: 3, c: 4, d: 5} // 스프레드 사용 시 같은 속성이 있다면 덮어쓴다
}

console.log(class5); 