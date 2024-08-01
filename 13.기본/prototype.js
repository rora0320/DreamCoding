function Dog (name,emoji){
    this.name=name;
    this.emoji=emoji;
    //인스턴스 레벨의 함수
    this.printName=()=>{
        console.log(`${this.name} ${this.emoji}`);
    }
}


//프로토타입 레벨의 함수
// **오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의(오버라이딩) 하면
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다.(섀도잉)
// 프토로타입 레벨 함수 < 인스턴스 레벨 함수 우선순위가 더 높음
Dog.prototype.printName = function(){
    console.log(`${this.name} 이 맞나? ${this.emoji}`);
}

const dog1 = new Dog('미미','🐕')
const dog2 = new Dog('캣타이거','🐯')
console.log('dogs',dog1,dog2)

dog1.printName=function(){
    console.log('안녕 동물들')
}

//정적 레벨
Dog.hello=()=>{
    console.log('hello???')
}
dog1.printName();
dog2.printName();
//생성자로 접근해야함
Dog.hello();
