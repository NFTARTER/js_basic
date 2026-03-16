// function.js
// function 함수명(전달인자){반복실행내용;}
//반복 함수 준비
function story1(){ //사용자정의함수
    story2(); //콜백함수 
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'; //기존이야기에 더하기 +=
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}
function story2(){ //사용자정의함수
    let b = '부모는 먹을 것이 없어'
    b += '계모가 아이들을 숲에 버리자고 제안한다'
    console.log(b);
}

//반복 함수 실행(함수 밖)
story2();

//카페 키오스크 함수
function kiosk1(){
    let menu = '카페라떼';
    menu += '아메리카노';
    menu += '바닐라라떼';
    menu += '프라푸치노';
    console.log(menu);
}
function kiosk2(){
    let payment = '카드';
    payment += '기타결제'
    payment += '카카오페이'
    console.log(payment);
}
function kiosk3(){
    let method = '테이크 아웃';
    method += '매장이용'
    console.log(method);
}
kiosk1();
kiosk2();
kiosk3(); //함수선언 밖 함수 실행
