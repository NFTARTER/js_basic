// 여러개의 값을 변수에 저장할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값 배열로 묶음.

//배열 사용안한 경우
const month = '월';
const tue = '화';
console.log(month, tue);

//배열 사용한 경우
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil); //모든 배열 출력
console.log(yoil[0]); //배열 값 중 원하는 인덱스 출력
console.log(yoil.length); //요일 객체의 길이속성

//-------------------------------배열 기초1.
//원하는 색상을 자유롭게 6개 배열로 저장하고
//그 중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기
const palette = ['red', 'black', 'green', 'brown', 'purple', 'yellow'];
console.log(`내가 좋아하는 색상은 ${palette[1]}, ${palette[3]} 입니다.`);

// 배열 생성법 2. 
// new Array() 내장함수 선언법

let wh = new Array(2); //숫자2대입(x), 빈배열위치2자리삽입(o)
console.log(wh);

wh[0] = 100;
wh[1] = 50;
console.log(wh);

// -------신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2); //빈 배열 2개 준비
/* colorSize[0] = prompt('pink, white 중 하나를 선택하세요');
colorSize[1] = prompt('220, 230, 240 중 하나를 선택하세요'); */
colorSize[0] = 'pink';
colorSize[1] = 220;
let order = `주문옵션 : 색상:${colorSize[0]}, 사이즈:${colorSize[1]}`; 
console.log(order);

//--------의류쇼핑몰 선택옵션 배열로 만들기 
//사이즈 : S M L
//색상 : 화이트, 블랙, 그레이
//추가상품 : 양말, 손수건

let coSiEx = new Array(3);
coSiEx[0] = prompt('S, M, L 중 하나를 선택하세요');
coSiEx[1] = prompt('화이트, 블랙, 그레이 중 하나를 선택하세요');
coSiEx[2] = prompt('양말, 손수건 중 하나를 선택하세요');
let results = `선택옵션 : 사이즈:${coSiEx[0]}, 색상:${coSiEx[1]}, 추가상품:${coSiEx[2]}`;
console.log(results);