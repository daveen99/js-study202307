
let foodList = [`닭꼬치`, `볶음밥`, `짜장면`, `족발`];

let findTarget = `볶음밥`;

// let index = -1;
// for (let i = 0; i < foodList.length; i++) {
//     if (findTarget === foodList[i]) {
//         index = i;
//         break;
//     }
// }

// indexOf: 배열의 특정요소가 몇번 인덱스에 있는지 탐색
// 동일한 엘리먼트가 있으면 먼저 등장하는 엘리먼트의 index를 반환함
// 존재하지 않으면 -1 을 반환함
let index = foodList.indexOf(findTarget);

console.log(`찾은 인덱스: ${index}`);


// includes(): 배열의 특정 요소가 존재하는지 논리여부를 확인한다.
let isPresent = foodList.includes(`닭꼬치`);
console.log(`존재 여부: ${isPresent}`);



// slice(): 배열을 일정부분 잘라내어, 복사본 배열을 반환
// 실제로 원본을 수정하는것이 아니라 copy본을 만드는것이다.
console.log(`========================`);

foodList.push(`오뎅`, `국밥`);
console.log(foodList);

// 앞에서 3개만 추출하고싶다.
let slicedFoodList = foodList.slice(0, 3);
console.log(slicedFoodList);

// 이러면 3번 인덱스부터 끝까지 ~
let sliced2 = foodList.slice(3);
console.log(sliced2);

// 원본배열을 그대로 복사
let copyArr = foodList.slice();
console.log(copyArr);


// reverse(): 배열을 역순으로 정렬, 원본이 변하는것에 주의한다.
// 카피본을 만들어서 쓰는편이다.
console.log(`=+=+=+=+=+===+=====+++====+`);

let arr1 = [10,20,30];
let arr2 = [9,7,5,3,1];

arr1.reverse();
console.log(arr1);

let arr2Copy = arr2.slice();
arr2Copy.reverse;
console.log(arr2Copy);
console.log(arr2);


// concat(): 배열 2개를 결합, 결합한 사본을 반환한다.

console.log(`+++++++++++++++++++++++`);

let concated = arr1.concat(arr2);
console.log(concated);
console.log(arr1);
console.log(arr2);


// splice(): 배열의 특정요소 제거, 삽입  //원본에서 직접 작용한다
console.log(`+++++++++++++++++++++++`);

console.log(foodList);

foodList.splice(3,1);
console.log(foodList);

foodList.splice(2, 1, `보쌈`);
console.log(foodList);

foodList.splice((1, 0, `마라탕`));
console.log(foodList);


// 전체삭제
// foodList.splice(0);
foodList = [];

console.log(foodList);