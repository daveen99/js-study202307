let a = 5;
let b = '5';

console.log(a === b);

console.log(a !== b);


// == 연산자는 예측이 어려우므로 사용 금지
console.log("=============");
console.log('0' === '');
console.log( 0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

console.log("======");
// 문자 대소 비교
console.log('cobra' < 'zebra');

//   A = 65
//   a=97 c=99     d=100
console.log('ace' < 'ade');



// 한글은   가 -> 힣  (44032)
// 영어 대문자 < 소문자 < 한글
// 같은 영어나 같은 한글끼리는 사전순으로 크기 결정