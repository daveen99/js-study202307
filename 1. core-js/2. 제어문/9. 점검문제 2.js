// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며
// 난이도별 입력 횟수제한이 다르다.
// 5번의 기회가 있고 업 다운을 알려줌, 최대 숫자와 최소숫자를
// 입력 숫자에 따라 반영해줌
let choice;
let left = 1,
  right = 100;
let chance = 5;
let clear = false;
let answer = Math.floor(Math.random() * 100) + 1;

while (true) {
  let stage = +prompt(`난이도를 선택하세요! 
    # [1.상(3번의 기회) | 2.중(6번의 기회) | 3.하(10번의 기회)]`);

  if (stage === 1) {
    chance = 3;
    break;
  } else if (stage === 2) {
    chance = 6;
    break;
  } else if (stage === 3) {
    chance = 10;
    break;
  }
}

main: for (; chance > 0; ) {
  choice = +prompt(`정답을 입력하세요. [${left} ~ ${right}]`);

  if (choice === answer) {
    clear = true;
    break main;
  } else if (choice >= right || choice <= left) {
    alert(`범위를 벗어난 정답입니다. 재입력하세요.`);
    continue;
  } else {
    chance = chance - 1;
    if (chance != 0) {
      if (choice > answer) {
        alert(`정답보다 큰 숫자입니다. [ DOWN! ]
        남은 기회는 ${chance}번 입니다.`);
        right = choice;
      } else if (choice < answer) {
        alert(`정답보다 작은 숫자입니다. [ UP! ]
        남은 기회는 ${chance}번 입니다.`);
        left = choice;
      }

      // alert(`남은 기회는 ${chance}번 입니다.`);
    }
  }
}

if (clear != false) {
  alert("축하합니다. 정답을 맞추셨습니다. gameover");
} else {
  alert("아쉽지만 실패하셨습니다.");
}
