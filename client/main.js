

/* global getNode, insertLast, clearContents */

// named export (이름 내보내기) ->{} 있다면~, 함수앞에 export 붙이면 됨

//vs

//default export (기본 내보내기) -> {} 없다면~, 함수가 단 1개여야함!


import { getNode, getNodes, insertLast, clearContents, refError} from "./lib/dom/index.js";



// import clearContents from "./lib/dom/clear.js"; //next.js



function phase1(){

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');


// 1. input value 값 가져오기
//    - input에게 input 이벤트 걸기 
//    - input.value 사용하기



function handleInput(){
  
  const firstValue = Number(first.value);
  const secondValue = Number(second.value);
  const total = firstValue + secondValue;

  clearContents(result);
  insertLast(result,total);
  
}


function handleClear(e){
  e.preventDefault();

  clearContents(first);
  clearContents(second);
  result.textContent = '-'
  
}


first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)
clear.addEventListener('click',handleClear);

}

const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));



function handleInput(){

  const total = numberInputs.reduce((acc,cur)=>acc + Number(cur.value),0)
 
  clearContents(result);
  insertLast(result,total);
}

function handleClear(e){
  e.preventDefault();

  numberInputs.forEach(clearContents)

  result.textContent = '-'
}

calculator.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear);


// 2. 두 수의 합 더하기



// 3. 합계 화면에 뿌리기(랜더링)

