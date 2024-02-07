/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',function(e){

    //console.log(e.target); // 첫 번째로 마주하는 마우스 포인터 대상
    //console.log(e.currentTarget);  // 이벤트가 적용되어져있는 대상



    console.log(this === e.currentTarget);
    //console.log('%c section','color:orange');
})
  
  

// article.addEventListener('click',()=>{
//     console.log('%c article','color:dodgerblue');
// })
  


// p.addEventListener('click',(e)=>{

// e.stopPropagation();  // 팝업창에 많이 쓰임 : 데드존이 되기때문!

//     console.log('%c p','color:hotpink');
// })













/* 캡처링 ----------------------------------------------------------------- */