class Car {
    constructor(name) {
        this.name = name
    }

    hello(){
        console.log(`안녕하세요, ${this.name}`)
    }
}


const myCar = new Car('자동차');
myCar.hello();

console.log(Object.getPrototypeOf(myCar));
console.log(Object.getPrototypeOf(myCar) === Car.prototype);
console.log(myCar.__proto__ === Car.prototype);