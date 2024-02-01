/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// function Animal(){

// }

// new Animal()

//위의 내용을 class 사용한다면~


//constructor method는 최초 1회만 실행됨. ((n회? 절대불가능))
class Animal{

    constructor(name){
        this.name = name;
        this.stomach = [];
        this.legs = 4;
        this.tail = true
    }
    
    getEat(){
        return this.stomach
    }

    setEat(food){
        this.prey = food;
        this.stomach.push(food);
    }



}


// const a = new Animal('호들이')




//일반함수-------------------------
// function Ani(){

// }

// const _a = new Ani()---------------------

//애니멀의 능력을 확장시켜서 타이거를 만들거야
class Tiger extends Animal{
  
    constructor(name){
     super(name)
      this.pattern = '호랑이무늬'
    }

    static bark(){
        return '어흥!'
    }

    hunt(target){
      return `${target}에게 조심히 접근한다.`
    }
}


const 한라산호랑이 = new Tiger('한돌이')
















