
// 단축평가(short circuit)
/*
    t && t  => true
    t && f  => flase
    f && t  => flase
    f && f  => flase

    t || t  => true  
    t || f  => true
    f || t  => true
    f || f  => false
*/

// OR 연산: 첫번째 truthy를 반환
console.log( 'hello' || 'world' );
console.log( 0 || '안녕' );

// AND 연산: 첫번째 falsy를 반환
console.log('HELLO' && 'WORLD');
// 헬로를 보니 true라서 오른편으로 넘어갔다
console.log(null && '메롱');



/*
    <h1>웰컴 투 홈페이지</h1>
    isLogin && <h2>○○○님 환영합니다.</h2>
     ㄴ 로그인이 false면 h2를 출력하지 않지만
        로그인이 true가 되면 h2를 출력하게되는 구조 ㄷㄷ;

    coupon && sendCoffee()
     ㄴ 기프티콘이 true면 sendCoffee()함수를 사용하는 구조

*/