


import { diceAnimation, getNode, getNodes } from './lib/index.js';


// 1. 주사위 굴리기 버튼을 누르면 diceAnimation() 실행될 수 있도록
// 2. 같은 버튼 toggle 만들기(isClicked)
// 3. 바깥 변수 보호하기 (closure)

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

let isClicked = false;
let stopAnimation;




// function handleRolligDice(){


//     let isClicked = false;
//     let stopAnimation;
    
//     return ()=>{

//         if(!isClicked){

//             stopAnimation = setInterval(diceAnimation,100);
    
//         }else{
    
//             clearInterval(stopAnimation);
//         }
    
//         isClicked = !isClicked;
       
//     }
// }



function renderRecordItem(){

    const 
}





//IIFE
const handleRolligDice = (() => {


    let isClicked = false;
    let stopAnimation;
    
    return ()=>{

        if(!isClicked){

            stopAnimation = setInterval(diceAnimation,100);
    
        }else{
    
            clearInterval(stopAnimation);
        }
    
        isClicked = !isClicked;
       
    }

})()


function handleRecord(){
    recordListWrapper.hidden = false;
    renderRecordItem()
}


rollingButton.addEventListener('click',handleRolligDice);
recordButton.addEventListener('click',handleRecord)