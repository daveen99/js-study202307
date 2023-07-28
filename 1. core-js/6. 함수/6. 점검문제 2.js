/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
//360과 90이 리턴되어야 함!
function calcNumbersTotalAndAverage(...numbers) {
    let result = 0;
    for(let i of numbers){
        result += i;
    }
    
    return {
        total: result,
        avg: result/numbers.length,
    }
}




let result = calcNumbersTotalAndAverage(90, 80, 100, 90); 

console.log(`총합: ${result.total}, 평균: ${result.avg}`);