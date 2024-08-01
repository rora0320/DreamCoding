
// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name,emoji){
    this.name=name;
    this.emoji=emoji;
}

Animal.prototype.printName=function (){
    console.log(`${this.name}:${this.emoji}`);
}

function Dog(name,emoji,owner){
    // super(name,emoji)
    Animal.call(this,name,emoji);
    this.owner=owner;
}
//Dog의 프로토타입을 Animal의 프로토타입으로  체이닝
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.play=function (){
    console.log('같이 놀아여');
}

const dog1 = new Dog('멍멍이','🐕','ellie')
dog1.printName();
dog1.play()