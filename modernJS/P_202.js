var x = 'global';
console.log('Y : ' + y); 

var y = 10; 

function foo() {
    console.log(x); // undifined 
    var x = 'local';
    console.log(x) // local
}

foo(); 
console.log(x);


