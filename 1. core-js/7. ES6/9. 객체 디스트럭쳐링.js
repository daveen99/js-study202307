
const emp = {
    empName: `뽀로로`,
    age: 4,
    hireDate: `2021-01-01`,
    birthDay: `2020-01-01`
};

const {empName, age, birthDay} = emp;  // 분해 !!

console.log(`내 이름은 ${empName}이고, 나이는 ${age}살이여 ㅋㅋ, 
생일은 ${birthDay}랑께`);


const { empName: en, age: a, birthDay: bd } = emp;  // 분해와 동시에 이름부여

console.log(`제 이름은 ${en}이고, 나이는 ${a}살 이며, 
생일은 ${bd}입니다.`);


const {birthDay:bDay, ...others} = emp;
console.log(`==========`);

console.log(others);


// 객체복사
console.log(`==================`);
const copyEmp = { 
    ...emp,
    address: `청양군`,
    hobbies: [`산책`, `수영`],          //복사와 동시에 프로퍼티 추가도 가능하다
    age: 17  // 원래 있던 프로퍼티라면 [수정]되어 복사된다.
};
copyEmp.empName = `잔망루피`;

console.log(copyEmp);
console.log(`====================`);
console.log(emp);  //복사가 잘 됐기 때문에, 카피본에만 수정이 적용된다!