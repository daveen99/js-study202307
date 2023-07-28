/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
//360과 90이 리턴되어야 함!
function calcNumbersTotalAndAverage(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  // 평균 구하기
  let avg = total / numbers.length;
  // ES6 신규문법 이렇게 하면 알아서 toatl: total, avg: avg가 된다. 밸류랑 키값의
  // 이름이 동일해야 적용 가능함? 
  return {
    total,
    avg,
  }
}


let result = calcNumbersTotalAndAverage(90, 80, 100, 90); 

console.log(`총합: ${result.total}, 평균: ${result.avg}`);