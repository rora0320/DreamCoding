//주어진 초가 지나면 callback함수를 호출함
// 단, 초가 0 보다 작으면 에러를 던지자

function runInDelay(callback,seconds){

    setTimeout(callback,seconds*1000);
    if(seconds<0){
        throw new Error('실행못하는 초')
    }
}
function runCallback(){
    console.log('callback???')
}
runInDelay(runCallback,5000);