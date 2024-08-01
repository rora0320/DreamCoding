//오브젝트

const dog = {name:'왕왕', emoji:'🐶'}

console.log(Object.keys(dog))
console.log(Object.values(dog))
console.log(Object.entries(dog))

//name 이라는 키가 있는지 없는지
console.log('name' in dog)
console.log(dog.hasOwnProperty('name'))

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고하는 객체로 저장됨.
const descriptors = Object.getOwnPropertyDescriptors(dog)
console.log('디스크립터',descriptors)

const descriptor = Object.getOwnPropertyDescriptor(dog,'name')
console.log('디스크립터 하나만',descriptor)

//프로퍼티 수정 가능
Object.defineProperty(dog,'name',{writable:false,enumerable:false/*열거*/,configurable:false/*키 수정*/})
console.log('dog?',dog)