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

## 글자 클리핑 마스크
/* 글자안에서 그라데이션 효과 및 배경이미지를 마스크 씌워서 보여주고 싶을 때 사용하는 속성값 모음 */
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;