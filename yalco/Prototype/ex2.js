function YalcoChicken(name, no){
    this.name = name;
    this.no = no; 
    this.intro = function () {
        return `안녕하세요 ${this.no}호 ${this.name} 점입니다!`
    }
}

const chain1 = new YalcoChicken('판교', 3);   

YalcoChicken.prototype.introEng = function(){
    return 'Welcome YalcoChicken'
}

// 프로토타입에 이런식으로 함수를 만들 수 있음 

console.log(chain1.intro()); 
console.log(chain1.introEng());

console.log(new YalcoChicken().introEng()); 
// 새로운 함수를 같은 타입의 프로토타입에 선언 : 같은 타입인 애들한테 공통적으로 사용할 수 있게 함 
// 마치 상속을 따라한 것 같은 느낌 