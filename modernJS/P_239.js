function Circle(radius) {
    console.log(this);
    this.radius = radius;

    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

Circle(2); // 일반함수로 콜했을 경우 this 는 전역객체를 가리킨다.

new Circle(2);  // new 연산자로 호출했을 경우 자기 자신을 가리킨다.

const func = (id) => {
    this.id = id;
    console.log(this);
}
//
// new func(10); // 화살표 함수는 생성자 함수로 사용할 수 없음 즉 new 키워드로 사용할 수 없음
