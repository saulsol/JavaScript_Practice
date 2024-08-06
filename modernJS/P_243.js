// 일반 함수 정의: 함수 선언문, 함수 표현식 
function foo() {

}

const bar = function () {}

const baz = {
    x: function () {} 
}

const arrow = () => {

}


foo(); 
bar(); 
new baz.x(); 
new arrow(); 