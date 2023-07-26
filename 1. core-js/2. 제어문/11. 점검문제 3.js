// 사칙연산 게임!
// 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요

// ex) Q1. 17 + 15 = ??
// 정답입력: 32
// 정답입니다!

// Q4. 7 + 1 = ??
// 정답입력: 0
// 게임을 종료합니다!
let player;
let counto = 0;
let countx = 0;
let realop;

alert(`재밌는 사칙연산 게임입니다.
재미없어지면 x를 입력해주세요.(종료)`);

for (let i = 1; ; i++) {
  let ln = Math.floor(Math.random() * 10) + 1;
  let rn = Math.floor(Math.random() * 10) + 1;
  let op = Math.floor(Math.random() * 3) + 1;
  if (op === 1) realop = "+";
  if (op === 2) realop = "-";
  if (op === 3) realop = "*";

  player = prompt(`Q${i}. ${ln} ${realop} ${rn} = ??`);
  if (player === 'x') {
    alert(`게임을 종료합니다!
        
        정답횟수: ${counto}회, 틀린횟수: ${countx}회`);
    break;
  }
  player = +player;
//   alert(`${typeof player}: ${player}, rn: ${rn}, ln: ${ln}`);
  if (op === 1) {
    if (player === ln + rn) {
      alert(`정답입니다!`);
      counto = counto + 1;
    } else {
      alert(`틀렸습니다.`);
      countx = countx + 1;
    }
  }
  if (op === 2) {
    // if (player === Math.abs(rn - ln)*-1) {
    if (player === ln - rn) {
      alert(`정답입니다!`);
      counto = counto + 1;
    } else {
      alert(`틀렸습니다.`);
      countx = countx + 1;
    }
  }
  if (op === 3) {
    if (player === ln * rn) {
      alert(`정답입니다!`);
      counto = counto + 1;
    } else {
      alert(`틀렸습니다.`);
      countx = countx + 1;
    }
  }
}
