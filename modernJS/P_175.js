function changeVal(primitive, obj){
    primitive += 100;
    obj.name = "LIM";
}


var num = 100;
var person = {name: 'LEE'};


changeVal(num, person);

console.log(num);
console.log(person);