function a(){
    return 1;
}

function b(){
    return a() + 1;
}

function c(){
    return b() + 1;
}

const result = c();
console.log(result);

//result =3  스택에 쌓이는건 호출된 함수 바닥부터 c() > b() > a()
//기본적으로 동기적으로 실행됨.