var me = {
	name: 'Kim'
}

delete me.name; 

console.log(me.name);    // 'Kim' 

console.log(me['name']); // 'Kim'

console.log(me.birth);   // undifined 