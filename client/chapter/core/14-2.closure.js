


function earth(){

    let water = true;
  
    let apple = {
      founder:'Steve Jobs',
      ceo:'Tim Cook',
      product: ['iphone','macbook','macStudio','appleWatch']
    }
  
    return function (value){
      water = value
      // return apple
    }
}
  
const UFO = earth()
  
   
UFO(0)











//도대체 어디서 쓰는 건가요?
const first = document.querySelector('.first');



function handleClick(){

    let isClicked = false;
  
    return ()=> {

        if(!isClicked){
        document.body.style.background = 'orange'
        }else{
            document.body.style.background = 'white'
        }

        isClicked = !isClicked

    }
}

first.addEventListener('click',handleClick())


//함수가 알아서 실행되게 하라ㅕ면?  즉시실행 => IIFE사용하기 ()()

/*
const handleClick = (()=>{

    let isClicked = false;
  
    return function(){
  
      if(!isClicked){
        document.body.style.background = 'orange'
      }else{
        document.body.style.background = 'white'
      }
    
      isClicked = !isClicked; 
  
    }
})()
  
  
  

first.addEventListener('click',handleClick)
*/








function useState(initValue){
    
    let value = initValue;

    function read(){
        return value;
    }

    function write(newValue){
        value = newValue;
    }

    return[read,write];
}

const [state,setState] = useState(111);



///클로저는 여전히 많이 쓰임
//