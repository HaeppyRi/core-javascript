/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);  //false

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);


//logical or assigment  논리합 할당 연산자⭐️⭐️⭐️
// ex) counter += 1; ==== counter + 1 = 1
// a = a || b;

//a ||= b;
//console.log(a);



// 부정 연산자
let reverseValue = !value;
console.log();




// 조건 처리

// 첫번째 Falsy를 찾는 연산 (F&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};   //--> 마지막 값
console.log(whichFalsy);

//-> 배열은 생성되기만 해도 값이 있다고 표현됨 [], {}
//-> {} 안에 내용물이 중요하지 않음. 왜냐하면 생성되는 것 자체가 true임!


// 첫번째 Truthy를 찾는 연산 (T||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:true};  //--> 2
console.log(whichTruthy);







//모던자바스크립트 로그인 구현하기 예제
/*
let userName = prompt('아이디를 입력해 주세요');


if(useName == 'Admin'){
    let pass = prompt('비밀번호:', '');

    if (pass = 'TheMaster'){
        alert('환영합니다.');
    } else if (pass == '' || pass == null){
        alert('취소되었습니다.');
    } else {
        alert('인증에 실패하였습니다.');
    }
}
else if (userName == '' || userName == null){
    alert('취소되었습니다.');
} else {
    alert('인증되지 않은 사용자입니다.');
}
*/


//강사님 풀이
let userName = prompt('아이디를 입력해 주세요');

//싱황
//1. 사용자가 취소 버튼을 누른경우 => null
//2. 사용자가 ESC 버튼을 누른 경우 => null
//3. 아무것도 입력하지 않은 경우 => ''
//4. 띄어쓰기를 입력한 경우 => ' '


function login(){

    let userName = prompt('아이디를 입력해 주세요');
  
    if(!userName) return; // 함수는 return 문을 만나면 해당 코드의 실행을 종료
  
  
    if(userName.toLowerCase() === 'admin'){
      let password = prompt('비밀번호를 입력해 주세요.');
  
      if(password.toLowerCase() === 'themaster'){
        console.log('로그인 성공! 환영합니다~!');
  
      }else{
        console.log('비밀번호를 잘못 입력하셨습니다.');
      }
  
    }else if(userName === null || userName.replace(/\s*/g,'') === '' ){
      console.log('취소했습니다.');
    
  
    }else{
      console.log('올바른 사용자가 아닙니다!');
    }
  
  
}
//? -> optional chianing 옵셔널 체이닝
// null, undefined를  