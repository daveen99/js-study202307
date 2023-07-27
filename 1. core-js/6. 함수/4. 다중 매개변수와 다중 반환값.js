// multi parameter: 매개변수의 개수가 n개일 경우
// n개를 하나의 박스(배열, 객체)에 담아서 전달하자!

// 정수 n개의 총합 (ES5)
function addAll(numbers, others) {
    let total = 0;
    for (let n of numbers) {
      total += n;
    }
    return total;
  }
  
  // 정수 n개의 총합 (ES6) - 스프레드
  function addAllEs6(...numbers) {
    let total = 0;
    for (let n of numbers) {
      total += n;
    }
    return total;
  }
  
  let r1 = addAll([10, 20, 30, 40], [11, 22]);
  console.log(`r1: ${r1}`);
  
  let r2 = addAllEs6(10, 20, 30, 40, 50);
  console.log(`r1: ${r2}`);
  
  //배열 하나쓸때는 ...numbers 하고 대괄호안치고 보내도 되지만
  //배열 두개이상쓸때는 numbers, others하고 대괄호를 잘 쳐서 보내야한다



  // 다중 반환값
  // 함수의 반환값은 언제나 하나여야 한다!
  // f(x) = 3a + 5b 4c;

  // 2개의 정수를 전달하면 두 수의 덧셈, 뺄셈, 곱셈, 나눗셈을
  // 반환받고 싶다.
function operateAll(n1, n2) {
    return {
        sub: n1 - n2,
        plus: n1 + n2,
        multi: n1 * n2,
        divide: n1 / n2,
    };
}

let results = operateAll(20, 10);
console.log(results);
console.log(`덧셈결과: ${results.plus}`);
// console.log(`곱셈결과: ${operateAll(4,5)[2]}`);