// JSON.parse() 메서드는 JSON 포맷의 문자열을 객체로 반환한다. 
// JSON.stringfy() : 자바스크립트 객체 => JSON 
// JSON.parse() : JSON => 자바스크립트 객체 

const todos = [
    {id: 1, content: 'HTML', completed: false}, 
    {id: 2, content: 'CSS', completed: true}, 
    {id: 3, content: 'Javascript', completed: false}, 
]; 

const json = JSON.stringify(todos); 

const parsed = JSON.parse(json); 
console.log(typeof parsed, parsed); 