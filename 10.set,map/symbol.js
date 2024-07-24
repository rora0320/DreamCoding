const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1,'hello');

console.log('읭',map.get(key2))
console.log('key1 = key2',key1===key2)