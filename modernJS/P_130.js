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