
let pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// 배열 맨 끝에 데이터 추가
pets.push(`징징이`);
pets.push(`어흥이`,`꼬부기`,`파이리`);

console.log(pets);


// 배열 맨 끝 데이터 제거
let r1 = pets.pop();
pets.pop();
let r3 = pets.pop();

console.log(pets);
console.log(`r1: ${r1}`);
console.log(`r3: ${r3}`);


// shift, unshift 앵간하면 쓰지말자
// 배열의 맨 첫 위치에 데이터 추가
pets.unshift(`비둘기`);
console.log(pets);

// 배열의 맨 첫 데이터 제거
pets.shift();
console.log(pets);