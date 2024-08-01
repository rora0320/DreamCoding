const ellie = {
    name: "ellie",
    occupation:"DreamCoding teacher",
    age: 32,
    eating:()=>{
        console.log('먹어요')
    }
}

console.log('ellie object',ellie)
console.log('직렬화 ->',JSON.stringify(ellie));