const person1 = {
    job: "개발자", 
    age: 28, 
    married: false, 
    name: '드라프트',
    blood: 'o' // 추가 인자 무관 
} 

function introduce(person) {
    console.log(
        `제 이름은 ${person.name} 이구요,` +
        `나이는 ${person.age}` + 
        `직업은 ${person.job}`+ 
        `${person.married ? '기혼' : '미혼' } 입니당.` 
     )
}

introduce(person1); 


function introduce_new({name, age, job, married}) {
    console.log(
        `제 이름은 ${name} 이구요,` +
        `나이는 ${age}` + 
        `직업은 ${job}`+ 
        `${married ? '기혼' : '미혼' } 입니당.` 
     )
}


introduce_new(person1); 