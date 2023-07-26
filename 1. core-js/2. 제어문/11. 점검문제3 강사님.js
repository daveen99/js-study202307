let qNumber = 1;
while (true) {
  // 랜덤 정수 2개를 생성
  let firstNumber = Math.floor(Math.random() * 20) + 1;
  let secondNumber = Math.floor(Math.random() * 20) + 1;

  let userAnswer = +prompt(
    `Q${qNumber++}. ${firstNumber} + ${secondNumber} = ??`
  );

  if (userAnswer === 0) {
    alert("게임을 종료합니다.");
    break;
  }

  // 정답 확인
  if (userAnswer === firstNumber + secondNumber) {
    alert(`정답입니다!`);
  } else {
    alert(`틀렸습니다.`);
  }
}
