
let num = 1234567;
// num이 과연 몇자리 수인가?
num = num.toString(); // 숫자를 문자로 바꿈
console.log(`자리수: ${num.length}`);
// let count = 0;
// while(true) {
//     num = Math.floor(num / 10);
//     count++;
//     let result = num % 10;
//     if (result === 0) break;
// }
// console.log(`자리수: ${count}`);


// 명시적 형 변환

// 문자로 변환    (String() or .toString())
let x = 30, y = 40;
let result = String(x) + y.toString();
console.log(`result: ${result}`);

// 숫자로 변환    (+붙이기 or Number())
let z = '100';
let result2 = +z + 200;
console.log(`result2: ${result2}`);

// 논리로 변환    (!!붙이기 or Boolean())   // !money하면 false로 바뀜
let money = 7000;
let hasMoney = !!money;
console.log(`돈이 있는가? ${hasMoney}`)