
//  &&: 양쪽이 모두 true일 경우 true 반환, 그외 false 반환
//  ||: 둘 중 하나라도 true일 경우 true 반환, 그외 false 반환

//  아이디 검증 // 패스워드 검증      로그인?
//     true          true       =>  true
//     true          false       =>  false
//     false         true       =>  false
//     false         false       =>  false

let t = true;
let f = false;
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);



// 논리 반전(not)
console.log("=======");
console.log(!t);

let money = 0;
if (!money) {
    console.log('쇼핑을 할거야!');
}
else {
    console.log('집에서 쉴거지롱~');
}

// 조건 연산자 (3항)
console.log("======================");

money = 7000;
let food; // 먹고 싶은 음식~
// if (money > 6000) {
//     food = '돈까스';
// }
// else {
//     food = '라면';
// }
console.log(`선택된 음식: ${money > 6000 ? '돈까스':'라면'}`);