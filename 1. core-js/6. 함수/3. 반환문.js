
function addNumber(n1, n2) {
    //반환값: 함수 호출이 끝나면 함수 호출부로 전달될 값
    return n1 + n2;
    //반환문은 함수의 탈출문이다.
    let n3 = 50;
    console.log(`dkdkdkdkdk`);
}

let r1 = addNumber(5,7);
console.log(r1);

console.log(addNumber(10,20));


// 함수의 중첩 호출
// 안쪽부터 실행, 같은 레벨이면 왼쪽부터 실행
let r2 = addNumber(addNumber(addNumber(3,2), 10), addNumber(5,8));
console.log(`r2: ${r2}`);


// 리턴이 없는 함수: void 함수
function multi(n1, n2) {
    let result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

//void 함수는 다른 변수에 담지도 말고
//다른 함수의 매개값으로 쓰지도 말아라
let r3 = multi(4,6);
console.log(`r3: ${r3}`);

multi(addNumber(2,2), addNumber(4,4));  // ok

// addNumber(multi(2,2), multi(5.5));    << ====    NO



// return의 탈출의 의미
function callName(nickName) {
    //금지어 목록
    let prohibits = (`돌아이`, `멍청이`, `빠가`);
    if (prohibits.includes(nickName)) {
        console.log(`고운말쓰기`);
        return;  //break대신 탈출문으로 사용할수있는거임
    }
    console.log(`${nickName}님 하이~~`);
}

console.log(`==================`);
callName(`빠가`);

function stopLoop() {
    while(true) {
        let flag = prompt(`명령어를 입력하세요.`);
        if (flag === `스톱`){
            return; // << return은 함수자체를 종료한다, break는 소속반복문만 탈출한다.
        }
        alert(flag);
    }
    alert(`수고수고링~~`)
}


stopLoop();