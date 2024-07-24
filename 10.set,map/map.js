const map=new Map([['key1','🍎'],['key2','🍊']])
console.log(map)

// 사이즈확인
console.log(map.size)

//존재 확인
console.log(map.has('key1'))
console.log(map.has('key6'))

//순회
map.forEach((value,key)=>{console.log('key',key)
    console.log('value',value)
    console.log('keys',map.keys())
    console.log('values',map.values())
    console.log('entries',map.entries())
})

//찾기
console.log(map.get('key2'))

//추가
map.set('key55','🍌')
console.log(map)

//삭제
map.delete('key55')
console.log(map)


const key = {name:'milk',price:10}
const milk = {name:'milk',price:10, description:'맛난것'};

const obj ={[key]:milk}
console.log('오브젝',obj)
const maps= new Map([[key,milk]])
console.log('맵',maps)
