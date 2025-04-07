function func1(value){
    return value;
}

console.log(func1("안녕하세요"));

const func2 = function (value){
    return value;
}

console.log(func2("안녕하세요2"));

const func3 = value => {
    return value;
}

console.log(func3("안녕하세요3"));

const func4 = (value1, value2) => {
    return value1 + value2;
}

console.log(func4(1, 5));

// 반환값이 여러 행일 경우에는 ()로 감싼 뒤 단일 행과 같이 모아서 반환할 수 있습니다.

const func5 = (value1, value2) => (
    {
        name: value1,
        age: value2
    }
)

console.log(func5("안녕", "hi"));