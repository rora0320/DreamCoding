// 클래스를 베이스로한 객체지향 프로그래밍
class Animal {
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;
    }
    printName(){
        console.log(`${this.name}:${this.emoji}`);
    }
}

class Dog extends Animal{
    constructor(name,emoji,owner) {
        super(name,emoji);
        this.owner=owner;
    }
    play(){
        console.log(`${this.owner}이랑 같이 놀아여`);
    }
}

const dog1 = new Dog('멍멍이','🐕','ellie')
dog1.printName();
dog1.play()

class Tigger extends Animal{
    hunt(){
        console.log('다잡아 먹는다 헌터 타이거')
    }
}

const tigger= new Tigger('타이거','🐯')
tigger.printName();
tigger.hunt();

console.log(dog1 instanceof Dog)       //>>true
console.log(dog1 instanceof Animal)    //>>true
console.log(dog1 instanceof Tigger)    //>>false

console.log(tigger instanceof Dog)    //>>false
console.log(tigger instanceof Animal) //>>true
console.log(tigger instanceof Dog)    //>>true