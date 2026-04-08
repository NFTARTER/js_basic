// 반복문 for 
// for(초기변수생성(i, j, k, m, n)과 초기값대입; 조건식; 증감식){반복실행문}

//자바스크립트 10번 반복 출력(반복문 이용)
// DOM요소(li[index]) 20개 1~20 기준으로 생각해서 숫자데이터로 생각해야함.
for(let i=0; i<10; i++){
    console.log('자바스크립트');  // 초기변수선언->조건문->반복실행내용->증감식 & {} 중괄호 안에 있으면 j로 이월
} 


// CSS 5번 반복 출력
for(let i=0; i<=4; i++){
    console.log('CSS');
}

// "HTML" 20번 반복 출력
for(let i=0; i<=19; i++){
    console.log('HTML'); //('HTML'+i); 여기서 +는 연결해주는 역할 & `HTML${i}`도 i 연속출력 
}//`HTML${i+1}`= 0으로 설정했지만 1부터 출력하고 싶을때

// 구구단 2단 반복 출력 "2x1=2"

//반복문 없이 함수 활용한 2단 예시
function dan2(){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    result += `${num}x2=${num*2}`;
    result += `${num}x3=${num*3}`;
    return result;
}
//반복문 활용 2단

//1로 시작한 예시
const dan2Result = document.querySelector('.dan2 .result');
console.log(dan2Result);
for(let i=1; i<=9; i++){
    let result = `2x${i}=${2*i}<br>`;
    // dan2Result.textContent += result;
    dan2Result.innerHTML += result; //innerHTML은 html속성을 넣어서 반영 / TextContent는 글자 그대로 반영
}
console.log('-----------------------------')
//0으로 시작한 예시
for(let i=0; i<9; i++){
    let result = `2x${i+1}=${2*(i+1)}`;
    console.log(result);
}

//3단
const dan3Result = document.querySelector('.dan3 .result');
console.log(dan3Result);
for(let i=1; i<=9; i++){
    let result = `3x${i}=${3*i}<br>`
    dan3Result.innerHTML += result;
}

//4단
const dan4Result = document.querySelector('.dan4 .result');
console.log(dan4Result);
for(let i=1; i<=9; i++){
    let result = `4x${i}=${4*i}<br>`
    dan4Result.innerHTML += result;
}

//자바스크립트 10번 반복 출력(반복문 없을 때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');

// 자바스크립트를 이용한 태그 생성
const target = document.querySelector('.target');
// 태그 생성 목적의 변수(저장소) 생성
const ul = document.createElement('ul');
ul.innerHTML = '<li>목록1</li>';
console.log(ul);
// target.innerHTML = ul;
target.appendChild(ul);//createElement로 생성한 태그삽입방법
// console.log(target);
/* target.innerHTML = '<ul>'
target.innerHTML += '<li>목록1</li>'
target.innerHTML += '<li>목록2</li>'
target.innerHTML += '</ul>' */

