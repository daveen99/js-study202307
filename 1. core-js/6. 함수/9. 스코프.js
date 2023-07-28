let x = 10; // 전역 변수: 프로그램에 전체에서 사용가능

function foo(z) {
  // console.log(`지역변수 x 선언전: ${x}`);
  let x = 30;
  let y = 20 + x; // 지역 변수: 함수 안에서만 사용가능
  console.log(y - z);
  // x = 30;
  console.log(`지역변수 x 선언후: ${x}`);
}

foo(17);
// console.log(y);
// console.log(z);
console.log(`함수 바깥쪽 x: ${x}`);

// 중첩 함수: 함수 안에 함수를 또 정의한 형태
console.log("====================");

function outer(m) {
  let n = "outer local n";
  let v = "outer local v";
  console.log(m);
  console.log(n);
  console.log(v);

  // 헬퍼 함수
  function inner() {
    console.log(n);
    let m = "inner local m";
    let v = "inner local v";
    console.log(m);
    console.log(v);
  }
  inner();
}

let m = "global m";

outer("outer param m");

console.log(m);


// 블록 스코프
let k = 100;
for (let k = 0; k < 10; k++) {
    console.log(`for문 안에서의 k: ${k}`);
}
console.log(`for문 밖에서의 k: ${k}`);


function abc() {
    k = 99;
}
function def() {
    k = 'hello';
}

