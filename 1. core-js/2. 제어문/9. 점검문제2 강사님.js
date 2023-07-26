

// 실제로 정답으로 사용할 랜덤 정수 만들기
let secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

// 입력 최소, 최대값
let min = 1, max = 100;

// 초기 카운트 수
let initCount = 5;
// 카운트다운 변수
let countdown = initCount;

while (true) {
  //사용자의 정답 입력값
  let answer = +prompt(`숫자를 입력하세요. [${min} ~ ${max}]`);

  //입력값 유효성 검사
  //입력범위 안의 값인가?
  if (answer < min || answer > max) {
    alert(`범위 안의 값으로 재입력 하세요.`);
    continue;
  }

  countdown--; //카운트 감소

  //업 다운 판단
  //정답인 경우
  if (secret === answer) {
    alert(`정답입니다.` );
    break;
  } else if (secret > answer) {
    alert(`UP`);
    min = answer + 1;
  } else {
    alert(`DOWN`);
    max = answer - 1;
  }

  // 추가 게임 종료 조건
  if (countdown === 0) {
    alert(`You lose, The answer is ..[${secret}]`);
    break;
  }
  else {
    alert(`${countdown}번의 기회가 남았습니다.`);
  }
} //end while

alert(`수고하셨습니다.`);
