/* --------------------- */
/* Type Conversion       */
/* --------------------- */


// let counter = 0;

// const li = document.querySelector(`li:nth-child(${counter++})`);



/* 데이터 → 문자
----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR));  //명시적 형 변환
console.log( YEAR + '');  // 암시적 형 변환 
// console.log( (YEAR + '      ').trim()  );  // 암시적 형 변환(공백제거가능)


// undefined, null
let days = null;
let weekend;



console.log(days + ''); //암시적 형 변환
console.log(undefined + ''); // 암시적 형 변환


// isActive -> css animation VS javascript animation


// boolean <= is or has 붙으면 T/F로 값이 나온다. (사용 적음)
let isClicked = false;

console.log(isClicked + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log( Number(friend) );  //NaN. undefined는 숫자로서의 변환이 일어나지 않는다.


// null
let money = null;
console.log( Number(money)); //0




// boolean
let cutie = true;
console.log( Number(cutie)); //1



// string
let num = '250';
console.log( Number(num)); // 명시적 형 변환
console.log( num * 1 ); // 암시적 형 변환
console.log( num / 1 ); // 암시적 형 변환
console.log( +num ); // 암시적 형 변환




// numeric string
const width = '105.3px';

console.log( Number(width)); //NaN   // 문자가 같이 포함되어있기 때문
console.log( parseInt(width)); //105  // parseIn(빌트인펑션=내장함수): 정수만
console.log( parseFloat(width)); //105.3  // parseFloat: 소수까지

// 주의할 점 : 앞에 문자 없도록 해야함. ex.10a5.3px -> 10






/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 빈문자 -> ''  / 공백 문자 -> ' '

console.log(Boolean(friend)); //f
console.log(Boolean(money));  //f
console.log(Boolean(' '));    //t
console.log(Boolean(0));      //f
console.log(Boolean('0'));    //t

//암시적 형 변환  => !!

// 위에 나열한 것 이외의 것들 

console.clear()








//데이터 -> 숫자

// const value = prompt('값을 입력해주세요');

// const value = Number(prompt('값을 입력해주세요'))
// const value = prompt('값을 입력해주세요') / 1
// const value = prompt('값을 입력해주세요') * 1

//재사용성을 고려한다면! 숫자로 쓰일 때/ 문자로 쓰일 때
const value = +prompt('값을 입력해주세요')
const numberValue = +value;

console.log( numberValue + 50 );