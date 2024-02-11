/* ------------------ */
/* Variables          */
/* ------------------ */


// var
// let
// const

let admin = 'john' // undefined
let name; // undefined

name = 'John';
admin = name;



const ourPlanetName = 'Earth';
const currentOnlineUserName = 'tiger';



/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */



/* variables ----------------------------------------------------------- */

// - 갯수 별 상품 가격 계산하기
// Calculate product price by quantity

let calcProductPriceByQuantity;


// - 구매 제품 가격의 총 합
// Total price of purchased products

let totalProductPrice;


// - 구매 결제 여부
// is... has... => true | false

let isPayment = false;

// let hasActive = true;
// let isClicked = true;


// - 구매 결제 내역

let paymentList;


// - 오늘의 운세
let fortuneOfToday = 'good';

// - 상품 정보
const productInfo = ''; // 낱개로 관리되는 것이 아닌, 객체로 관리됨!!



/* constant variables -------------------------------------------------- */

// - 1년 기준 일(day)자 수 

const DAY_PER_YEAR = 365;


// - 브랜드 접두사

const BRAND_PREFIX = 'nike';




/* -------------------------------------- */ 

//⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// 상수는 '=' 옆에 오는 것을 못바꾸는 것임. 객체 안에 들어오는 값은 언제든지 변경 가능함.
// let보다는 const로 변수를 선언하는 것이 안정성 측면에서 더 권장됨.

// const a = 'hello';

// const b = {
//   name:'tiger',
//   age:'35'
// }





//⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// 참조에 의한 객체 복사
// 원시값일 경우는 그대로 복사가 이루어짐. 그래서 a는 여전히 원래의 값.
// 그러나, 객체는 원시값이 아니기 때문에 값의 주소만을 가져오게 됨!

let b = 'hello';

const a = b;   // a,b 모두 'hello'-> let 변경 후 콘솔 b='안녕' 변경 -> a='hello'


// const user = {
//   name:'tiger',
//   age:35
// }


// const user2 = user;  // 둘 다 동일 -> 유저2.name 값 'bear' 변경 -> 참조에 의한 객체복사로 인해 유저&유저2 모두 이름 'bear'로 변경됨.