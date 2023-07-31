let tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (true) {
    // 탈출조건
    if (tvxq.length === 0){
        alert(`모든 멤버가 탈퇴했습니다.`);
        break;
    }
  let delTarget = prompt(`현재 멤버: [${tvxq}\n 삭제할 멤버의 이름은?]`);

  //defTarget을 삭제
  if (tvxq.includes(delTarget)) {
    // 삭제 진행
    let index = tvxq.indexOf(delTarget);
    tvxq.splice(index, 1);
    alert(`삭제완료, 남은 멤버 [${tvxq}]`);
  } else {
    alert(`${delTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요.`);
  }
}
