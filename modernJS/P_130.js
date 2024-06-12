var circle = {
    radious : 5,
    
    getDiameter : function () {
        return 2 * this.radious; 
    }
}; 

console.log(circle.getDiameter()); 


var person = {
    name : 'Lee' 
};

console.log(person.name);
console.log(person['name']);

person.name = 'Kim';
console.log(person.name);

// 동적 프로퍼티 생성 
person.age = 30; // 매우 간단하게 동적 프로퍼티를 생성하였다 0
console.log(person); 
