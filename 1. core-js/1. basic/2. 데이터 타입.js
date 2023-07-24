let age1 = 5; // 10진수: 5, 이진수: 101
let age2 = "5"; // 10진수: 85, 이진수: 1010101

// js는 정수, 실수 구분하지 않고 모두 실수처리
let num = 2; //실제로는 2.0이 저장됨
console.log(typeof num);
console.log(5 / num);

// 문자 타입
let s1 = "str1";
let s2 = "str2";
let s3 = `str3`; // 백틱      ~를 쉬프트 안누르고 입력
console.log(typeof s3);

let tag = '<ul><li><a href="#">link</a></li></ul>';

let tag_ = `<ul>
    <li>
        <a href="#">
            link
        </a>
    </li>
</ul>`;

console.log(tag_);


let userName = '뽀로롱';
let userAge = 5;

// let message ='제 이름은 ' 
// + userName + '이구요. 나이는 ' 
// + userAge + '살이에요~';

let message = `제 이름은 ${userName}이구요. 나이는 ${userAge}에요`;

console.log(message);


// 논리 타입
let flag = true;
console.log(typeof flag);


// undefined타입과 null타입
// undifined: 변수를 만들고 값을 안넣어놓은 상태 (실수)
// null: 의도적으로 값이 없다는 표현을 한 상태   (고의)

let address;
console.log(address);

let address2 = '충남 청양군 읍내리';
address = null;
console.log(address2);