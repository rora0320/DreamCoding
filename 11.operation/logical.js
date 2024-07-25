const katy = {name:'dog' }
const mini = {name:'horse', owner:'Disney' }
const miki = {name:'cat', owner:'Disney' }

const changeOwner=(animal)=>{
    if(!animal.owner){
        throw new Error('주인이 없어')
        console.log('주인이 없어')
    }
    animal.owner ='첫 주인'
}

const makeOwner=(animal)=>{
    if(animal.owner){
        throw new Error('주인이 있어')
        console.log('주인이 있어')
    }
    animal.owner ='다른 주인'
}

katy.owner || makeOwner(katy)
mini.owner || makeOwner(mini)
miki.owner || changeOwner(miki)

console.log('katy',katy)
console.log('mini',mini)
console.log('miki',miki)

const item = {price:10}
const price = item.price
console.log(price)

const dog = {name:'ddog', owner:{name:'rora',age : 20}}
const printName = ()=>{
    const owner =dog&& dog.name && dog.owner && dog.owner.name
    console.log(owner)
}
printName(dog)