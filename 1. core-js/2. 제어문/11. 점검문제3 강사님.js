// 문제 넘버링
let qNumber = 1;

// 정답, 오답 횟수
let correctCount = 0;
let wrongCount = 0;

while (true) {
  // 랜덤 정수 2개를 생성
  let firstNumber = Math.floor(Math.random() * 20) + 1;
  let secondNumber = Math.floor(Math.random() * 20) + 1;

  // 부호를 만들 랜덤 정수 생성
  let markNum = Math.floor(Math.random() * 3);

  let mark;
  let realAnswer; // 실제 정답
  if (markNum === 0) {
    mark = '+';
    realAnswer = firstNumber + secondNumber;
  } else if (markNum === 1) {
    mark = '-';
    realAnswer = firstNumber - secondNumber;
  } else {
    mark = '*';
    realAnswer = firstNumber * secondNumber;
  }

  let userAnswer = +prompt(
    `Q${qNumber++}. ${firstNumber} ${mark} ${secondNumber} = ??`
  );

  if (userAnswer === 0) {
    alert("게임을 종료합니다.");
    break;
  }

  // 정답 확인
  if (userAnswer === realAnswer) {
    alert(`정답입니다!`);
    correctCount++;
  } else {
    alert(`틀렸습니다.`);
    wrongCount++;
  }
}

alert(`정답횟수: ${correctCount}, 오답횟수: ${wrongCount}`);
