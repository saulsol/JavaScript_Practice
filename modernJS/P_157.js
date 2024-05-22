
function add (x, y){
    return x + y; 
}


var add = function add(x, y) {
    return x + y;
}

var add = new Function('x', 'y', 'return x + y'); 

var add = (x, y) => x + y; 


console.dir(add);