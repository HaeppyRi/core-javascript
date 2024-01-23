/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자
----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR));  //명시적 형 변환
console.log( YEAR + '');  // 암시적 형 변환 
// console.log( (YEAR + '      ').trim()  );  // 암시적 형 변환


// undefined, null
let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');



// boolean
let isClicked = false;

console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log( Number(friend) );  //NaN. 숫자로서의 변환이 일어나지 않는다.

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

console.log( Number(width)); //NaN
console.log( parseInt(width)); //105
console.log( parseFloat(width)); //105.3

// 주의할 점 : 앞에 문자 없도록 해야함/ 






/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 빈문자 -> ''  / 공백 문자 -> ' '

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));



// 위에 나열한 것 이외의 것들 

console.clear()


//데이터 -> 숫자

// const value = prompt('값을 입력해주세요');
// const value = Number( prompt('값을 입력해주세요') )
// const value = prompt('값을 입력해주세요') / 1
// const value = prompt('값을 입력해주세요') * 1
const value = +prompt('값을 입력해주세요')
const numberValue = +value;

console.log( numberValue + 50 );
