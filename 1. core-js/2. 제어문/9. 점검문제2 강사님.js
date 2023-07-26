


// 난이도 상수
const HIGH = 1;
const MIDDLE = 2;
const LOW = 3;


// 초기 카운트 수
let initCount;

// 초기 난이도 설정 선택창 띄우기
let level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');
if (level === HIGH){
    initCount = 3;
}
else if (level === MIDDLE){
    initCount = 6;
}
else if (level === LOW){
    initCount = 10;
}
else {
    alert(`Auto level system online, set level[Hell]`);
    initCount = 1;
}

// 카운트다운 변수
let countdown = initCount;

// 실제로 정답으로 사용할 랜덤 정수 만들기
let secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

// 입력 최소, 최대값
let min = 1, max = 100;


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
    alert(`정답입니다. ${initCount - countdown}번 만에 맞추셨어요.`);
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
