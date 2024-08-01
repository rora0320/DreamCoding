// freeze :: object 동결
const ellie = {name:'엘리', emoji:'🧑‍💻'}
const dog = {name:'왕바우', emoji:'🐶', owner:ellie}

//얼리면 추가하거나 삭제, 수정, 속성 재정의 안됨
// 단, 얕은 꽁꽁 얼림 >> 엘리의 정보를 변경하면 변경됨
Object.freeze(dog);
dog.name='엘리멍멍이'
console.log('ellie dog',dog)
ellie.age=25
console.log('dog info',dog)

//seal :: Object 밀봉
const cat ={}
// cat 에 dog를 복사해와  >> const cat = {...dog}와 동일
Object.assign(cat,dog);
//밀봉
Object.seal(cat);
console.log('cat info::',cat)
//이름이 변경은 됨.
cat.name='야옹이';
console.log(cat);
delete cat.emoji;
//이모지 삭제는 안됨
console.log(cat)

//확장 금지 preventExtensions
const tiger = {name:'호랭이'}
Object.preventExtensions(tiger)
console.log('tiger ?', Object.isExtensible(tiger))
tiger.name='어흐흥';
console.log(tiger)
delete tiger.name;
console.log(tiger)
tiger.age=25
console.log(tiger)