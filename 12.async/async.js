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

const fetchFruits=()=>{
    return getBanana()
        .then((banana)=>
            getGreenApple()
                .then((apple)=>  [banana,apple]))
}

const asyncFruit = async()=>{
    const banana=await getBanana()
    const apple=await getRedApple()
    return [banana,apple]
}

fetchFruits().then((fruits)=>console.log('과일가져와',fruits))
asyncFruit().then((fruits)=>console.log('async과일가져와',fruits))