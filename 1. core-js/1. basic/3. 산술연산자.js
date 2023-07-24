
// 거듭제곱
let num = 3;

console.log(num ** 4);

// 증감 연산자
var x = 5;

x++;

console.log(`x: ${x}`);

let y = 33;
console.log(`y: ${y--}`);
console.log(`y: ${y}`);

// 후위연산자
// a의 값 7이 d로 넘어가고 ++을 만나서, a의 값이 1 증가하여 8 이 된다.
let a = 7;
let b = a++;
console.log(`a: ${a}, b: ${b}`);

// 전위 연산자
// c의 값 7이 d로 넘어가는 도중 ++을 만나 1이 증가하고,
// 이어서 c의 값 8을 d에 넣어준다.
let c = 7;
let d = ++c;
console.log(`c: ${c}, d: ${d}`);



// 대입 연산자
let z = 9;
// z = z + 3;
z+=3; // 12
z-=8;  //4
z*=10; //40
z/=8; // 5
z**=2; //25
console.log(`z: ${z}`);


let m = 8;
m++;  // 딱 1증가, 1감소할 때는 ++, --가 빠르다.
// m += 1;
console.log(`m: ${m}`);