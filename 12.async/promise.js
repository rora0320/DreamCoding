// 프로미스 인스턴스 만들기 기본
// function runInDelay(seconds){
//     return new Promise((resolve, reject)=>{
//         if(!seconds || seconds < 0){
//             reject('seconds');
//         }
//         setTimeout(()=>{
//             resolve();
//         },seconds*1000);
//     });
// }
//
//
// runInDelay(0)
//     .then(()=>console.log('끝남'))
//     .catch((e)=>console.log('에러',e))
//     .finally(()=>console.log('최종 호출'));




// 체이닝
const fetchEgg =(chicken)=>{
    // new Promise 새로운 인스턴스(객체)를 만드는 생성자
    // return new Promise((resolve,reject)=>{})
    return Promise.resolve(`${chicken} => 🥚`)
}

const fryEgg =(egg)=>{
    return Promise.resolve(`${egg} ====> 🍳`)
}

const getChicken =()=>{
    return Promise.resolve(`🍞🥚🍞 ===> 🐓`)
}

getChicken().then((chicken)=>fetchEgg(chicken)).then((egg)=>fryEgg(egg)).then((fryEgg)=>console.log(fryEgg))