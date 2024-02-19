// console.log('storage');

import { isString } from "./typeOf.js";



const {localStorage:storage} = window;



export function setStorage(key,value){

    return new Promise((resolve,reject)=>{

        if(isString(key)){
            storage.setItem(key,JSON.stringify(value));
            resolve();
        }else{
            reject({message:'key는 문자 타입이어야 합니다.'});
        }
    })
}

setStorage('user',{name:'haeri'})

// localStorage.setItem('user',JSON.stringify({name:'haeri', age:28}));

// console.log( JSON.parse(localStorage.getItem('user')) );


export function getStorage(key){



    return new Promise((resolve,reject)=>{

        if(isString(key)){
            resolve(JSON.parse(storage.getItem(key)));
        }
        else{
            reject({message:'key는 문자 타입이어야 합니다.'});
        }
    })
}


const data = await getStorage('user')

// console.log(data) //{name:'haeri'}
getStorage('user') //{name:'haeri'}




export function deleteStorage(key){
    return new Promise((resolve, reject) => {
      !key ? storage.clear() : storage.removeItem(key);
      resolve();
    })
  }

// deleteStorage('user')


