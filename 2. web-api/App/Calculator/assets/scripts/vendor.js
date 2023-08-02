
// 프로그램에서 전역적으로 사용할 변수, 함수를 정의한다.

const $userInput = document.getElementById('input-number');
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

const $currentResultOutput = document.getElementById('current-result');
const $currentCalculationOutput = document.getElementById('current-calculation');

// const $logUl = document.getElementById(`log`);
const $logEntries = document.querySelector('.log-entries');
function outputResult(result, text) {
  $currentResultOutput.textContent = result;
  $currentCalculationOutput.textContent = text;
}
