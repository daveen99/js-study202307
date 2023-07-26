
let num1 = +prompt(`첫번째 숫자를 입력하세요!`);
let num2 = +prompt(`두번째 숫자를 입력하세요!`);

let result = 0;

if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}
for (let i = num1; i <= num2; i++){
    result += i;
}
alert(`${num1} ~ ${num2}까지의 누적합: ${result}`);