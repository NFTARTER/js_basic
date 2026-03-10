# 제이쿼리
* 자바스크립트를 이용한 HTML 동적처리를 좀 더 쉽게 해주는 라이브러리 언어 제이쿼리 
* `<title><title> 태그 다음 위치에 **CDN 주소 연결 필수** https://cdnjs.com/libraries/jquery
## 제이쿼리 기본 문법
* `$()` 제이쿼리 기본 선언법
* `$('.클래스명')`
* `$('#아이디명')` 
* `$('태그명')` 
`''` 따옴표 안 CSS선택자처럼 원하는 대상 작성 가능
`$('대상').show();` 대상 보이기
`$('대상').hide();` 대상 숨기기
`$('대상').css('속성', '값');` CSS 적용하기
`$('대상').removeClass();` class 제거하기(괄호 비우면 모든 클래스제거)
`$('대상').addClass('추가클래스명');` class 적용하기
# 자바스크립트 260306
## 변수
* 프로그래밍의 첫번쨰 시작작업은 필요한 데이터들을 반드시 **변수(저장소)**로 저장해야 한다.
## 변수 작성법
* `변수선언키워드 생성변수명;` -> 빈 저장소 생성 <!-- only for declaration -->
    * `var box;`  
* `변수선언키워드 생성변수명 대입연산자 대입값;` <!-- declaration and value are in both -->
    * `var box = 1;`  
* `생성변수명 대입연산자 대입값;` <!-- only for input value -->
    * `box = 2;`  
* 변수선언키워드 : var, let, const
* 생성변수명 - 영문, 숫자조합(숫자는 영문뒤로)

## 글자 클리핑 마스크
/* 글자안에서 그라데이션 효과 및 배경이미지를 마스크 씌워서 보여주고 싶을 때 사용하는 속성값 모음 */
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;

## 변수 작성 시 주의사항
* 변수의 이름은 문자(a~z,A~Z), 숫자(0~9), 달러($), 밑줄(_)이 포함됩니다.
* 변수의 이름은 숫자로 시작할 수 없습니다.
* 변수의 이름은 대시(-)나 마침표(,) 기호를 사용할 수 없습니다.
* 키워드나 예약어는 사용할 수 없습니다.
    키워드, 예약어 종류 -> delete, this, false, true, default, var
    new, class등
* 모든 변수는 대/소문자를 구별합니다. score와 Score는 다른 변수입니다!
* 변수가 저장할 정보의 종류를 표현하는 의미있는 단어를 사용해야 합니다!

## 변수 표기법 종류
* 캐멀 표기법 - newName / websiteCode
* 파스칼 표기법 - NewName / WebSiteCode
* 밑줄 표기법 - new_name / web_site_code
### 객체, 속성, 메서드 작성법
* `객체;` -> 객체 읽음
* `객체.속성;` -> 객체의 속성 읽음  
* `객체.메서드();` -> 객체를 메서드방법으로 실행함
* `객체.속성.속성.메서드();`
* `객체.메서드().속성;`
* `객체.메서드().메서드();`
* `객체.메서드(메서드());`
## 변수의 자료형 
Are they both text or number?
* var_user_id="abc";
* var_user_age= 20;
## 데이터타입 구분 함수 'typeof()'
1. 특정 데이터타입을 담아둔 변수를 생성
    * `let num = 1;'`
    * `let str = '1';'`
2. 해당 변수의 데이터타입을 구분하기 위해 typeof 함수확인
    * `console.log(typeof(num));` //Number(숫자)
    * `console.log(typeof(str));` //String(문자)

## 피연산자가 숫자인 경우 -> 산술연산자 
a + b    더하기)두 개의 피연산자를 더한다. 
a - b    빼기)왼쪽 피연산자에서 오른쪽 피연산자를 뺀다. 
a * b    곱하기)두 개의 피연산자를 곱한다.  
a / b    나누기)왼쪽의 피연산자를 오른쪽 피연산자로 나눈 몫이다. 
a % b    나머지)왼쪽의 피연산자를 오른쪽 피연산자로 나눈 나머지이다. 
a ** b   거듭제곱)왼쪽의 피연산자의 오른쪽 피연산자의 값만큼 곱한 값이다. 
<!-- when the calculation is unavailable -> NaN (Not a Number) -->
