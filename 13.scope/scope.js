/**
 * 스코프 */
// 글로벌 변수는 앱이 종료될때까지 계속 메모리에 유지됨
const global = 1;

{
//블럭 내부에서만 존재하고 블럭이 끝나면 자동 소멸됨 (GC-garbage collect)
    const local = 1;
}

/**
 * 호이스팅 */

//함수의 호이스팅은 함수의 선언문 전에 호출이 가능함.
    print();

function print(){
    console.log('요렇게')
}


//**변수와 클래스는 선언만 호이스팅 되고, 초기화는 안됨! 초기화 전 변수에 접근하면 에러발생함
    console.log(hi);
const hi = 'hihihi';    //>> crash 되지만 hi가 초기화되기 전에 접근못함 이라는 에러 뜸
