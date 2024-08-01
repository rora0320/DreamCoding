function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('can not find 🐓'));
}

// // 아래 코드를 async / await 으로 변환하기
// getChicken()
//     .catch(() => '🐔')
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
//     .then((meal) => console.log(meal))
//     .catch((error) => console.log(error));

const getChickenFlow = async () => {
    try {
        await getChicken();
    } catch (err) {
        try {
            const egg = await fetchEgg('🐔')
            const meal = await fryEgg(egg)
            console.log('meal?', meal)
        } catch (err) {
            console.log('err')
        }
    }
}

getChickenFlow();

function makeMealFromEgg() {
    return getChicken()
        .catch(() => '🐔')
        .then((chicken) => fetchEgg(chicken))
        .then((egg) => fryEgg(egg))
        .then((meal) => {
            console.log(meal)
            return meal
        })
}

makeMealFromEgg().then(console.log)

const makeMealFromEgg2 = async () => {
    let chicken ='';
    try {
        chicken= await getChicken();
    } catch (err) {
        chicken='🐔'
    }
    const egg = await fetchEgg(chicken)
    const meal = await fryEgg(egg)
    return meal
}
makeMealFromEgg2().then((result)=>{console.log('egg2',result)})