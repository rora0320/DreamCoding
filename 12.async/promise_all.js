const getBanana =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('🍌')
        },1000)
    })
}

const getRedApple =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('🍎')
        },3000)
    })
}

const getGreenApple =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('🍏')
        },2000)
    })
}

const getOrange =()=>{
    return Promise.reject(new Error('we do not have orange!!'))
}

const array1 = [];
//바나나 레드사과 같이 가져오기
getBanana().then((banana)=>{
    array1.push(banana);
    return getRedApple()}
).then((apple)=>{
    array1.push(apple)
    console.log('array',array1)
})

getBanana().then(banana=>getRedApple().then((apple)=>console.log('apple',[banana,apple])))
Promise.all([getBanana(),getGreenApple(),getOrange() ]).then((fruit)=>console.log(fruit)).catch((err)=>console.log('all-error',err));
Promise.race([getBanana(),getGreenApple(),getOrange()]).then((fruit)=>console.log('race',fruit)).catch((err)=>console.log('race-error',err));
Promise.allSettled([getBanana(),getGreenApple(),getOrange()]).then((fruit)=>console.log('all-settled',fruit)).catch((err)=>console.log('all-settled-error',err));
