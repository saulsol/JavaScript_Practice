const todos = [
    {id: 1, content: 'HTML', completed: false}, 
    {id: 2, content: 'CSS', completed: true}, 
    {id: 3, content: 'Javascript', completed: false}, 
]; 

// 자바스크립트 객체 배열을 JSON 포맷의 문자열로 반환한다. 
const jsonArray = JSON.stringify(todos, null, 2); 
console.log(typeof jsonArray, jsonArray); 