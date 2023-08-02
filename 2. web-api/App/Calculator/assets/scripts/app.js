// index.html에서 활용할 이벤트처리, 핸들러 ...

// 계산 이력을 모아둘 배열
const logEntries = [];
// 로그 이력을 만드는 함수
const writeToLog = (operation, prevResult, number, result) => {
  // 하나의 로그 객체 (연산, 이전결과, 연산숫자, 연산결과)
  const logObject = {
    operation,
    prevResult,
    number,
    result,
  };
  logEntries.push(logObject);
  console.log(logEntries);
};

// 현재 계산기에 그려질 숫자
let currentResult = 0;

// 사용자의 입력값을 읽어오는 함수
const getUserNumberInput = () => +$userInput.value;

// 계산 로그를 만들고 화면에 렌더링하는 함수
const createLogAndRenderOutput = (operateMark, originResult, calcNumber) => {
  // 로그 생성
  const calcDscriptionLog = `${originResult} ${operateMark} ${calcNumber}`;
  // 화면에 렌더링
  outputResult(currentResult, calcDscriptionLog);
};

// 계산 기능 헬퍼 함수
const calculate = (type) => {
  // 계산 전 값을 백업
  const originResult = currentResult;
  // 입력창에 입력한 숫자를 읽기
  const enteredNumber = getUserNumberInput();

  let mark;
  if (type === 'ADD') {
    mark = '+';
    // 실제 계산결과 반영
    currentResult += enteredNumber;
  } else if (type === 'SUB') {
    mark = '-';
    // 실제 계산결과 반영
    currentResult -= enteredNumber;
  }else if (type === 'MULTI') {
    mark = '*';
    // 실제 계산결과 반영
    currentResult *= enteredNumber;
  } else {
    mark = '/';
    // 실제 계산결과 반영
    currentResult /= enteredNumber;
  }
  console.log(`${mark} button click!`);

  createLogAndRenderOutput(mark, originResult, enteredNumber);

  // 로그 이력 쌓기
  writeToLog(type, originResult, enteredNumber, currentResult);
};

// 더하기 버튼 이벤트 핸들러
const addHandler = () => {
  calculate('ADD');
};
// 빼기 버튼 이벤트 핸들러
const subtractHandler = () => {
    calculate('SUB');
};
// 곱하기 버튼 이벤트 핸들러
const multiplyHandler = () => {
    calculate('MULTI');
};
// 나누기 버튼 이벤트 핸들러
const divideHandler = () => {
    calculate('DIVIDE');
};

// =================== 이벤트 핸들러 바인딩 =====================//
$addBtn.addEventListener("click", addHandler);
$subtractBtn.addEventListener("click", subtractHandler);
$multiplyBtn.addEventListener("click", multiplyHandler);
$divideBtn.addEventListener("click", divideHandler);
