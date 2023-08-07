// UL 태그
const $postUi = document.querySelector(".posts");


// form 태그
const $addForm = document.querySelector('#new-post form');
// console.log($addForm);


// 서버에서 게시물들을 가져와서 화면에 렌더링
const fetchGetPosts = () => {
  // 서버와 통신하기
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  // 통신정보 전달
  /*
  HTTP method
  - GET: 리소스를 조회 (게시물 조회, 마이페이지 회원정보 조회)
  - POST: 리소스를 등록 (게시물 쓰기, 회원가입, 장바구니담기)
  - PUT: 리소스를 일괄수정 (게시물의 모든정보를 통채로 수정)
  - PATCH: 리소스를 일부수정 (게시물의 제목만 수정)
  - DELETE: 리소스를 삭제 (게시물 지우기, 회원탈퇴, 좋아요 취소)
*/
  // 요청정보 초기화
  xhr.open("GET", "http://localhost:5000/posts");
  // 요청 보내기
  xhr.send();
  // 응답 데이터 가져오기
  xhr.onload = (e) => {
    //요청이 끝난 후 xhr 객체를 보면 응답 객체가 들어있음
    // console.log(xhr.response);

    // 서버에서 온 데이터는 js가 아니라 json이기 때문에 json을 js로 변환해야 함
    // json -> js = JSON.parse()
    // js -> json = JSON.stringify()
    const postList = JSON.parse(xhr.response);
    // console.log(postList[0].title);

    postList.forEach((post) => {
      const $postLi = document.createElement("li");
      $postLi.classList.add("post-item");
      $postLi.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button>DELETE</button>
        `;
      $postUi.appendChild($postLi);
    });
  };
};


fetchGetPosts();

const fetchNewPost = (e) => {
    e.preventDefault(); // form의 새로고침 기능 중단
    // console.log('form이 제출됨!');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/posts')

    const payload = JSON.stringify({
        title: document.getElementById('title').value,
        body: document.getElementById('content').value 
    });

    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(payload);

    // 응답 상황 처리
    xhr.onload = e => {
        if(xhr.status === 200 || xhr.status === 201) {
            alert('게시물 등록 성공!');
        } else {
            alert('게시물 등록 실패!');
        }
    };

};

// 폼태그 전송 이벤트 등록
$addForm.addEventListener('submit', fetchNewPost);

document.getElementById('go-link').addEventListener('click', e => {
    const flag = confirm('진짜 이동합니까?');
    if (!flag) {
        console.log('넌 못지나간다.');
        e.preventDefault(); // 태그의 기본 기능을 없앱니다.
        // 기본기능이란? a태그: 링크이동, checkbox태그: 체크기능
        //           form태그: 서버에 데이터를 주면서 새로고침
    }
});