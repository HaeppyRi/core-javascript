/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray  -> 배열이 맞는지 체크

const isArray = data => Array.isArray(data);


//일반함수
function isArray2(data){
    return Array.isArray(data)
}




const people = [
    {
        id: 0,
        name: '박가희',
        age: 25,
        job: '명탐정코난 범인',
        imageSrc: 'FAkq31'
    },
    {
        id: 1,
        name: '김보미',
        age: 64,
        job: '짜요짜요 마케터',
        imageSrc: 'Gak34'
    },
    {
        id: 2,
        name: '한태희',
        age: 13,
        job: '삐돌이',
        imageSrc: 'Fkzoq81'
    },
    {
        id: 3,
        name: '이원명',
        age: 81,
        job: '이도령',
        imageSrc: 'Tq9z1i'
    }
]

/* 요소 순환 ---------------------------- */

// forEach => 값을 반환하지 않음

let nameArray = [];  //-> 나온 값을 저장하고 싶을때 아래의 푸시를 통해 생성 가능

people.forEach((item,index)=>{
    nameArray.push(item.name);
})

// console.log(nameArray)

// 이벤트가 많을때 이런 방식을 쓰면 되나요? x  이벤트 위임 (event delegation)

const list = document.querySelectorAll('span');

list.forEach((item,index)=>{
  item.addEventListener('click',function(){
    console.log(index);
  })
})


// list[0].addEventListener('click',()=>{
//   console.log('first!!!!');
// })


// list[1].addEventListener('click',()=>{
//   console.log('second!!!!');
// })






/* 원형 파괴 ----------------------------- */

const arr = [10,100,1000,10_000];

// push
// pop
// unshift
// shift
// reverse

const reverse = [...arr].reverse();


// splice => 슬라이스의 상위버전
//const splice = arr.splice(1,2,'javascript','css') //1번째부터 2개만 추가해줘 // arr에 추가됨


// sort => 정렬 도와줌
arr.sort((a,b)=>{
    return a - b
})


const newArray = arr.toReversed()


/* 새로운 배열 반환 ------------------------ */



// concat
// slice
// toSorted
// toReversed
// toSpliced


// map  => 새로운 배열을 반환함.

// const job = people.map((item,index)=> item.job)

const card = people.map((item,index)=>{

    return /* html */ `
      <div class="userCard">
        <div class="imageField">
            <img src="${item.imageSrc}.jpg" alt="${item.alt}">
        </div>
        <span>이름: ${item.name}</span>
        <span>나이: ${item.age}</span>
        <span>직업: ${item.job}</span>
      </div>
    `
})
  
  
// card.forEach((item)=> document.body.insertAdjacentHTML('beforeend',item))

const newAge = people.map(item => item.age + 1);



const 젊은이들 = people.filter((item)=>{
    // return item.age < 30
})




const find = people.find((item)=>{
    return item.job === '삐돌이'
})


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

//모든 나이의 합
const totalAge = people.reduce((acc,cur)=> acc + cur.age ,0)

/*풀어서
const totalAge = people.reduce((acc,cur)=>{
    acc + cur.age
},0)
*/


const tem = people.reduce((htmlCode,cur)=>{
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
},'')

  
document.body.insertAdjacentHTML('beforeend',tem)




/* string ←→ array 변환 ------------------ */

// split : 문자 -> 배열

const str = '원명 가희 소정 설아 경민 진욱'

const stringToArray = str.split(' ');
console.log(stringToArray);


// join : 배열 -> 문자

const arrayToString = stringToArray.join('/');
console.log( arrayToString );