
const userNames = [ `김철수`, `강감찬`, `박영희` ];

// userNames에서 각각의 요소들을 다시 변수로 저장시키고 싶다.
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

const [a, b, c] = userNames;

console.log(`a: ${a}, b: ${b}, c: ${c}`);

const [kk, ,gg] = userNames;
console.log(`kk: ${kk}, gg: ${gg}`);

// 변수값 교환하기
let first = 10;
let second = 20;

[second, first] = [first, second];
console.log(`1st: ${first}, 2nd: ${second}`);

// 맨 앞 2개는 각각의 변수에 저장하고
// 나머지는 묶어서 다시 배열로 만들고 싶다.
const [one, three, ...rest] = [ 1, 3, 5, 7, 9, 11];

console.log(`one: ${one}, three: ${three}`);
console.log(`rest: ${rest}`);


// **스프레드를 활용한 배열 간편 복사
console.log(`===============================`);

const foods = [`감자튀김`, `햄버거`, `콜라`];

// const copyFoods = foods; // 배열 포인터 복사

// 배열 값 복사 방법
// const copyFoods = foods.map(f => f);
// const copyFoods = foods.slice();

// 스프레드 복사(복사하면서 추가가능) + 가장쉬움
const copyFoods = [`치킨너겟`, ...foods, '닭강정'];  

foods[1] = `치킨버거`;
copyFoods[2] = `Cyder`;

console.log(`foods: `, foods);
console.log(`copy: `, copyFoods);