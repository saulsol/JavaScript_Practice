function repeat(n, f) {
    for(var i=0; i<n; i++){
        f(i);
    }
};

var logAll = function (i) {
    console.log(i); 
};

repeat(5, logAll); 
// 내부적으로 어떤 반복적인 일처리를 위한 외부 함수를 받아서 일처리 하는 것 => 콜백 함수 

console.log('------------------------')

var logOdds = function (i) {
    if(i % 2 === 1) {
        console.log(i); 
    }
}

repeat(5, logOdds);