// 일반함수에서의 this
function foo() {
  // nodejs 환경에서는 global객체 할당
  // 브라우저 환경에서는 window객체 할당
  console.log(this);
}
// foo();

// 객체에서의 this
// 객체 그 자체가 this
const model = "아반떼";
const car = {
  madeBy: "hyundai",
  model: "grander",
  showCarInfo: function () {
    console.log(this);
    console.log(`제조사: ${this.madeBy}, 모델명: ${this.model}`);
  },
};
car.showCarInfo();

// 이벤트 핸들러에서의 this  : function으로 선언할 경우
// 이벤트를 건 요소가 this다.
// const $btn = document.getElementById('btn');

// const buttonHandler = function() {
//     console.log(this);
//     this.style.background = 'red';
// }
// $btn.addEventListener('click', buttonHandler);

// console.log('====================');

// this를 조작하는 메서드 bind, call, apply

// call
function sayHello(lang1, lang2) {
  console.log(`this: ${this}`);
  console.log(`Hello, I am ${this.name}. I can speak ${lang1} and ${lang2}`);
}

const kim = {
  name: "김철수",
  age: 33,
};
const park = {
  name: `박영희`,
  age: 55,
};

// this를 조작하는 메서드 call
// param1: 조작할 this를 전달
// ...param2: 원래 함수가 받아야할 파라미터 전달
// sayHello.call(kim, 'English', 'Japanese');

// this를 조작하는 메서드 apply
// call이랑 똑같은데 param2를 배열에 묶어서 줘야함
// sayHello.apply(kim, ['English', 'Japanese']);

// this를 조작하는 메서드 bind
// call, apply는 함수를 바로 실행시킨다.
// 그러나 bind는 this를 조작한 새로운 함수를 반환하고
// 실행은 시키지 않는다.
const bindedSayHello = sayHello.bind(park, "Korean", "Spanish");
bindedSayHello();

//예시
const eventHandler = function (fruit, e) {
  console.log("event 객체: ", e);
  console.log("과일명: ", fruit);
  // console.log(this);
};

const $input = document.querySelector("input");
// document.getElementById('btn').addEventListener('click', eventHandler.bind($input));
document
  .getElementById("btn")
  .addEventListener("click", eventHandler.bind(null, `사과`));

// 화살표 함수와 this
const dog = {
  name: `뽀삐`,
  regularFn: function () {
    console.log("regular: ", this); //자기자신 객체
  },
};

dog.regularFn();
// dog.arrowFn();

console.log(`===================`);

const cat = {
  name: "나비",
  introduce: function () {
    console.log(`intro this: `, this);
    setTimeout(() => {
      console.log(`setTime this: `, this);
      console.log(`안녕, 제 이름은 ${this.name}이에요`);
    }, 1000);
  },
};

cat.introduce();

// 화살표함수는 자체 this를 가지지않아 그 상위의 this를 가진다.
$modal.addEventListener("click", function (e) {
  console.log("this"); //$modal
  $ok.addEventListener("click", function (e) {
    console.log("this"); //$ok
  });
  $cancle.addEventListener("click", (e) => {
    console.log("this"); //$modal
  });
});
