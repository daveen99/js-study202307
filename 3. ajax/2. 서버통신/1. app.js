// UL 태그
const $postUl = document.querySelector(".posts");

// form 태그
const $addForm = document.querySelector("#new-post form");
// console.log($addForm);

// 서버에서 게시물들을 가져와서 화면에 렌더링
const fetchGetPosts = () => {
  // 서버와 통신하기 ( 게시물 정보 100개 불러오기 )
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  // 통신정보를 전달
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

  // 요청보내기
  xhr.send();

  // 응답 데이터 가져오기
  xhr.onload = (e) => {
    // 요청이 끝난후 xhr객체를 보면 응답정보가 들어있음
    // console.log(xhr.response);

    // 서버에서 온 데이터는 js가 아니라 json이다.
    // 따라서 js에서 사용하려면 json을 js로 변환해야 한다.

    // JSON ->  JS  :  JSON.parse()
    // JS   -> JSON :  JSON.stringify()
    const postList = JSON.parse(xhr.response);
    // console.log(postList[0].title);

    postList.forEach(({ id, title, body }) => {
      const $postLi = document.createElement("li");
      $postLi.classList.add("post-item");
      // li태그에 식별 아이디를 부여
      $postLi.dataset.postId = id;
      $postLi.innerHTML = `
      <h2>${title}</h2>
      <p>${body}</p>
      <button>DELETE</button>
    `;
      
      $postUl.appendChild($postLi);
    });
  };
};

fetchGetPosts();

const fetchNewPost = () => {
  // console.log('form이 제출됨!');

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/posts");

  const payload = JSON.stringify({
    title: document.getElementById("title").value,
    body: document.getElementById("content").value,
  });

  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(payload);

  // 응답 상황 처리
  xhr.onload = (e) => {
    if (xhr.status === 200 || xhr.status === 201) {
      alert("게시물 등록 성공!");
    } else {
      alert("게시물 등록 실패");
    }
  };
};

// 폼태그 전송 이벤트 등록
$addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchNewPost();
});

// 서버에 삭제요청을 보내는 함수
const fetchDelete = (id) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `http://localhost:5000/posts/${id}`);

  xhr.send();

  // 응답 처리
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('삭제 성공!');
    } else {
      alert('삭제 실패!');
    }
  };
};

// 삭제 클릭하면 벌어질 일들에 대한 함수
const deletePostHandler = e => {
  if (!e.target.matches('button')) return;

  // 삭제 클릭 대상 아이디 잡아오기
  console.log('삭제 클릭!');
  const id = (e.target.closest('.post-item').dataset.postId);

  fetchDelete(id);
};

// 삭제 이벤트 등록
$postUl.addEventListener('click', deletePostHandler);





/*
document.getElementById("go-link").addEventListener("click", (e) => {
  const flag = confirm("진짜 이동합니까?");
  if (!flag) {
    console.log("넌 못가~");
    e.preventDefault(); // 태그의 기본 기능을 없앰
    // 기본 기능: a -> 링크이동 기능
    //            checkbox -> 체크기능
    //            form -> 서버에 데이터를 주면서 새로고침
  }
});
*/