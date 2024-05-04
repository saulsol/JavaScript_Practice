for(var i = 0; i<10; i++){
    for (var j = 0; j<10; j++){
        if(i+j === 6) console.log(`[${i} + ${j} = 6]`); 
    }
}

// 문자열 인덱스 검색
var string = 'Hello';
var index;  

for(var i = 0; i<string.length; i++){
    if(string[i] === 'l'){
        index = i; 
        break; 
    }
}

console.log(index); 