/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  const resultX = calcTotal(10000, 8900, 1360, 2100);
  const resultY = calcTotal(21500, 3200, 9800, 4700);
  const resultZ = calcTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
  let calculateTotal = function(a,b,c,d,e,f,g){

    //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 '유사배열'이라 부른다.

    console.log( arguments );  //순환시켜서 | 반복시켜서 값을 전부 더하기

    let total = 0;

    //for문
    // for(let i = 0; i < arguments.length; i++){
    //     total += arguments[i]
    // }


    //for ...of (반복가능한)👍
    // for(let value of arguments){
    //     total += value;
    // }


    //빌려쓰기
    // Array.prototype.forEach.call(arguments,function(item){
    // total += item
    // })


    //arguments의 부모(객체)를 배열로 바꿔치기 한다면?
    // arguments.__proto__ = Array.prototype;
    // console.log(arguments);

    // arguments.forEach(function(item,index){
    //     total += item;
    // })


    //arguments 객체(유사배열) => 진짜 배열(array)

    // const arr = Array.prototype.slice.call(arguments)
    // const arr = Array.from(arguments);
    const arr = [...arguments] //spread syntax


    // console.log( arr );

    // arr.forEach(function(item){
    //     total += item;
    // })

    //arr.forEach( item => total += item )


    //⭐️<<배열의 메서드>>⭐️ Array method ⭐️

    //forEach => 값을 반환하지 않음. 반복의 로직만 처리
    //reduce => 값을 반환함. 모든걸 다 처리함(배열, 객체, 문자, 숫자)



    //map       => 배열을 반환함
    //filter    => 배열을 반환함

    arr.reduce(function(acc,cur){ // 코드를 줄여쓸 수 있어서 reduce, (누적값/ 현재값)
        return acc + cur  // 값을 반드시 내뱉어야함!
      }, 0) // 초기값. 초기값 지정 안되어있다면 첫번째 값인 10이 첫번째 누적값이 됨
       
    // total = arr.reduce(function(acc,cur){
    //     return acc + cur
    // },0)

    //=== 
    // return arr.reduce((acc,cur)=> acc + cur)








    return total

    //return a + b + c + d + e + f + g
};
  
  const result = calculateTotal(10,20,30,40,50,60,70,80);
  console.log( result );


//----------------------------------
//   const data = [
//     {
//       name:'tiger',
//       age:30,
//     },
//     {
//       name:'kindtiger',
//       age:20,
//     },
//     {
//       name:'seonbeom',
//       age:41,
//     }
//   ]
  
  
  
//   const tag = data.map((d)=>{
//     return `<li> 이름 : ${d.name}</li>`
//   })
  
  
//   tag.forEach((i)=>{
//     document.body.insertAdjacentHTML('beforeend',i)
//   })










// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){

};
  
  
// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};
  
  
// 콜백 함수 (표현)식
let cb = function(state,success,fail){
    if(state){
        return success()
    }else{
        return fail()
    }
};
  

// cb(
//     false,
//     ()=> '성공',
//     ()=> '실패',
// );

cb(
    true,
    function(){return '성공'},
    function(){return '실패'}
)



//예시
function movePage(url,success,fail){

    // if(url.includes('www')){
    //   success(url)
    // }else{
    //   fail()
    // }
    
    url.includes('www') ? success(url) : fail()
}
  
  
// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )
  
  
movePage(
    'https://www.naver.com',
    function (url){
      console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);
      
      setTimeout(() => {
        // window.location.href = url
      }, 3000);
    },
    function (){
      console.error('잘못된 url 정보를 입력하셨습니다.');
    }
)




console.clear();
// 함수 선언문 vs. 함수 (표현)식

  
// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression


// IIFE

// 캡슐화 (incapsulation)

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// rename 가능  => closure


// import export  => module 프로그래밍 (use strict)

const MASTER = (function(tiger){

    let uuid = 'asdas!asfaj9ASFad';
  
  
    // console.log( tiger.name, tiger.alert(),tiger.prompt() );
    
  
    return {
      getKey(){
        return uuid;
      },
      setKey(value){
        uuid = value
      }
    }
    
})(window);
  
  
  
console.log( MASTER.getKey() );
  
  
  
// import { css } from "../../utils/css.js";
  
// css()
  
  
  
// const css = (function(){
    
//   function getStyle(node,prop){
  
//     if(typeof node === 'string'){
//       node = document.querySelector(node)
//     }
//     if(typeof prop !== 'string'){
//       throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
//     return getComputedStyle(node)[prop]
//   }
   
//   function setStyle(node,prop,value){
    
//     if(typeof node === 'string') node = document.querySelector(node);
    
//     if(typeof prop !== 'string'){
//       throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
    
//     if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');
    
//     node.style[prop] = value
//   }
    
//   function css(node,prop,value){
  
//     return (!value) ? getStyle(node,prop) : setStyle(node,prop,value)
      
      
//   }
    
  
//   return css;
  
// })()
  
  
  
// 개발 팀장 : 박가희 getStyle, setStyle, css 이거 만들었으니까 가져다 쓰세용 근데,,get,set 함수는 쓰지 말고 css 함수만 사용하셔도 됩니다.
  
  
// 개발 인턴 : 박지성  getStyle() 작동은 잘됨. 컨벤션 깨짐 