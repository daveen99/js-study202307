const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
console.log(`======1. 2022년에 발생한 거래정보======`);
traders
  .filter((trade) => trade.year === 2022)
  .map((u) => {
    return {
      name: u.trader.name,
      city: u.trader.city,
    };
  })
  .forEach((u) => console.log(`이름: ${u.name}, 도시: ${u.city}`));


// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
console.log(`======2. 거래자가 근무하는 모든 도시이름 배열======`);

const allCity = traders.map((trd) => trd.trader.city);

console.log(allCity);


// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
console.log(`======3. 대전에 근무하는 모든거래자들의 거래자정보 매핑======`);
traders
  .filter(trd => trd.trader.city === `대전`)
  .map(trd => trd.trader)
  .forEach(trd => console.log(`거래자정보 [이름: ${trd.name}, 근무지: ${trd.city}]`));

// const trdInfo = traders
//   .filter((trd) => trd.trader.city === "대전")
//   .map((trd) => {
//     return {
//       name: trd.trader.name,
//       city: trd.trader.city,
//       year: trd.year,
//       value: trd.value,
//     };
//   });

// console.log(trdInfo);


// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
console.log(`======4. 모든 거래자의 이름을 배열에 모으시오======`);
const allName = traders.map((trd) => trd.trader.name);

console.log(allName);


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
console.log(`======5. 서울에 사는 거래자의 모든 거래액 총합======`);
let result = 0;
const addValue = traders
  .filter(trd => trd.trader.city === '서울')
  .map(trd => trd.value)
  .forEach(trd => result += trd);
console.log(`서울에 사는 거래자의 모든 거래액 총합: ${result}`);

// let result = 0;
// for (let value of addValue) {
//     result = result + value;
// }
// console.log(result);


