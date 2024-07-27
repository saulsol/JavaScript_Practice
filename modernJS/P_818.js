// JSON 의 키는 반드시 큰 따옴표로 묶어야 한다. 
const obj = {
    name : 'lee', 
    age : 50, 
    alive : true, 
    hobby: ['traveling', 'tennis']
}

const json = JSON.stringify(obj); 
console.log(typeof json, json); 
// JSON.stringfy() => 자바스크립트 객체를 JSON 포맷의 문자열로 변환한다. 

function filter( key, value){
    return typeof value === 'number' ? undefined : value; 
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);  

