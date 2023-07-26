
// 1 ~ 10 사이의 랜덤한 정수를 생성한다.

// Math.random() : 0.0이상 ~ 1.0미만의 랜덤실수 발생
// Math.random() * 10 : 0.0이상 10.0미만의 랜덤실수 발생
// Math.floor(Math.random() * 10) -> 0이상 10미만 
// 소수점 버리기
// Math.floor(Math.random() * 10) + 1 -> 1이상 11미만

// x이상 y이하의 랜덤정수 생성 공식
// Math.floor(Math.random() * (y - x + 1) + x)

// 117 ~ 123
let rn = Math.floor(Math.random() * 3) + 1;
console.log(rn);

let a = 27;
let b = 25;
console.log(a-b);