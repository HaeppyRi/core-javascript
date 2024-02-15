

import { getNode } from "../dom/getNode.js"



const first = getNode('first');
const second = getNode('second');


function delay(callback,timeout = 1000){
    setTimeout(callback,timeout)
}

delay(()=>{

    first.style.top = '-100px';
    second.style.top = '100px';

    delay(()=>{
        first.style.transform = 'rotate(360deg)'
        delay(()=>{
            first.style.top = '0'
            second.style.top = '0'
        })
        second.style.transform = 'rotate(-360deg)'
    })
})



//first.style.transform = 'rotate(360deg)'
//first.style.top = '0'









/* ------------------------------------
                 promise
---------------------------------------*/





function delayP(){

    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            
        })
        resolve('성공~');
    })
}






const result = delayP();

result.then((res)=>{
    console.log(res);
})

console.log( );





// const promise = new Promise((resolve, reject)=>{
//     reject('실패')
// })

// console.log(promise);



// console.log('delay');