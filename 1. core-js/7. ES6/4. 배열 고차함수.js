const userList = [
    {
      account: "abc1234",
      userName: "대길이",
      job: "추노",
      address: "서울",
      hobbys: ["수영", "축구", "테니스"],
    },
    {
      account: "banana",
      userName: "빠나나",
      job: "과일",
      address: "서울",
      hobbys: ["푸드파이팅", "테니스"],
    },
    {
      account: "park1234",
      userName: "주차왕",
      job: "발렛파킹",
      address: "경기",
      hobbys: ["족구", "축구", "테니스", "영화감상"],
    },
    {
      account: "fire",
      userName: "불꽃남자카리스마",
      job: "게이머",
      address: "서울",
      hobbys: ["독서", "테니스"],
    },
  ];

// 배열 고차함수
// forEach(): 배열의 요소를 반복하면서 하나씩 소비한다.
userList.forEach(user => {
    console.log(`제 이름은 ${user.userName}이구요, ${user.address}에 살아요.`);
});

const foodList = [`짜장면`, `제육볶음`, `치킨`];
foodList.forEach(food => console.log(`${food} 맛있어요!`));

console.log(`===========`);

// 배열 고차함수 : filter
// 특정 조건에 의해 필터링된 새로운 배열을 반환
const numbers =[1,2,3,4,5,6,7,8,9,10];

const newArray = numbers.filter(n => n % 3 === 0);
console.log(newArray);


// 회원 중 아이디가 abc1234인 사람을 필터링해줘
const newUserList = userList.filter(user => user.account === `abc1234`);
console.log(newUserList);


// 배열 고차함수: map
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 
// 새롭게 매핑한 배열을 반환
// 객체 하나하나에 다 접근한다.
console.log(`==============`);

const doubled = numbers.map(n => n ** 2);
console.log(doubled);

const plusTwo = numbers.map(n => n + 2);
console.log(plusTwo);


const firstHobby = userList.map(u => u.hobbys[0]);
console.log(firstHobby);


// 회원 목록(4명)에서 회원의 이름과 주소만 추출하고 싶다.
const prettierUserList = userList.map(u => {
    return {
        userName: u.userName,
        addr: u.address,
    };
});
console.log(prettierUserList);

// filter -> 10개짜리 배열에서 조건에 맞는 몇개만 필터링
// 필터의 결과 배열은 개수가 10개 이하일 가능성이 크다.

// map -> 10개짜리 배열에서 조건대로 10개를 전무 매핑한다.
// 맵의 결과 배열 개수는 무조건 10개다.



console.log('=========================');

const appleBasket = [{
    color: 'green',
    sweet: 13
  },
  {
    color: 'red',
    sweet: 14
  },
  {
    color: 'red',
    sweet: 11
  },
  {
    color: 'green',
    sweet: 6
  },
  {
    color: 'green',
    sweet: 7
  },
  {
    color: 'green',
    sweet: 9
  },
];

// 사과중에 녹색이면서 당도가 9이상인 사과만 선별해서
// 이 사과는 xxx색이며 당도는 xxx입니다.
// 라는 문자열이 매핑되어있는 배열을 리턴해주세요.
appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => `이 사과는 ${apple.color}색이며 당도는 ${apple.sweet}입니다.`)
  .forEach(a => console.log(a));


// 회원목록에서 서울에 사는 회원들의
// 두번째 취미만 배열에 모아서
// ***회원님의 두번째 취미는 ***입니다. 를 반복해서 출력
console.log(`===============================`);
userList  //[ {5}, {5}, {5}, {5} ] 객체 4개
  .filter(usr => usr.address === '서울') //[ {5}, {5}, {5} ] 객체 3개로 줄여짐
  .map(usr => {
    return {
        name: usr.userName,
        secondHobby: usr.hobbys[1],
    };
  }) //[ {축구}, {테니스}, {테니스}]
  .forEach(u => console.log(`${u.name}회원님의 2번째 취미는 ${u.secondHobby}입니다.`));