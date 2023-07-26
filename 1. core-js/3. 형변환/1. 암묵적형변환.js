
let n1 = 10;
let n2 = `20`;

console.log(n1 + n2);

let n3 = n1 + '';
console.log(typeof n3);

let n4 = '100' * 55;
console.log(n4);


// truthy, falsy
// js에서는 0, '', null, undefined, NaN는 거짓이다.

// falsy      뭐가됐든 이 5개 말고는 js에서는 전부 true로 읽는다.
if (undefined) console.log(`ok1`);
if (null) console.log(`ok2`);
if (0) console.log(`ok3`);
if ('') console.log(`ok4`);
if (NaN) console.log(`ok5`);
//  다 거짓이라 안뜸


// truthy
if (1) console.log('ok6');
if (-100.99) console.log('ok7');
if (' ') console.log('ok8');
if ('메롱') console.log('ok9');
if ([1,2,3]) console.log('ok10');
if (function() {}) console.log('ok11');
// 다 참이라서 log뜸
// if문에 함수가 들어가네;