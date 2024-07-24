const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
console.log(set1)

const filter = [...set1].filter(item =>set2.has(item))
console.log(filter)
const newSet = new Set([...filter])

console.log(newSet)

const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

const newFruits= new Set(fruits)

console.log([...newFruits])