// 즉시 실행 함수 

var res = (
    function (){
        var a = 3; 
        var b = 3; 

        return a * b; 
    }()
);


// 그룹 연산자로 감싸 함수를 피연산자로 사용, 즉시 실행 함수의 사용 방식 
console.log(res);