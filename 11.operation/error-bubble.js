function a(){
    throw new Error('error')
}
function b(){
    a()
}
function c(){
    b()
}

try{
    c();
}catch(e){
    console.log('에러나와라',e)
}finally{
    console.log('에러든 아니든 끝나구')
}