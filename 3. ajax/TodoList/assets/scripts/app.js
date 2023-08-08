const URL = "http://localhost:5000/todos";

// Form
const $form = document.querySelector(".todo-insert");
// Ul
const $todoUl = document.querySelector(".todo-list");
// 추가버튼
const $addbtn = document.getElementById("add");
//수정버튼


fetch(URL)
  .then((res) => res.json())
  .then((todo_list) => {
    // console.log(todo_list);

    const $TodoTemplate = document.getElementById("todo-template");

    todo_list.forEach(({ id, text, done }) => {
      const $todoLi = document.importNode($TodoTemplate.content, true);

      $todoLi.querySelector("li").dataset.postId = id;
      $todoLi.querySelector(".text").textContent = text;
      $todoLi.querySelector("input").textContent = done;
      // $todoLi.querySelector(".checkbox").textContent = done;

      $todoUl.appendChild($todoLi);
    });
  });

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const payload = {
    text: document.getElementById("todo-text").value,
    done: false,
  };
  //fetch로 POST요청 보내는법
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      alert("등록 성공!");
    } else {
      alert("등록 실패!");
    }
  });
});

// 삭제 클릭하면 벌어질 일들에 대한 함수
const deletePostHandler = (e) => {
  if(e.target.matches(".modify span")) {
    const id = e.target.closest(".todo-list-item").dataset.postId;
    const $addtext = document.getElementById('addtext');
    const $beforemodi = document.querySelector('.checkbox span');

    $addtext.textContent = $beforemodi.textContent;

    if ($addtext.classList.value === 'modify-input'){
      $addtext.classList.remove('modify-input');
      $beforemodi.classList.remove('visible');
    } else {
      $addtext.classList.add('modify-input');
      $beforemodi.classList.add('visible');
    }
  };


  if (!e.target.matches(".remove span")) return;

  // 삭제 클릭 대상 아이디 잡아오기
  const id = e.target.closest(".todo-list-item").dataset.postId;
  fetch(`${URL}/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 200) {
      alert("삭제 성공!");
    } else {
      alert("삭제 실패!");
    }
  });
};

$todoUl.addEventListener(
  "change",
  (e) => {
    e.preventDefault();
    if (!e.target.matches(".checkbox input")) return;

    // console.log('?:', e.target);

    const id = e.target.closest(".todo-list-item").dataset.postId;
    let payload;
    if (e.target.checked) {
      payload = {
        done: true,
      };
    } else {
      payload = {
        done: false,
      };
    }
    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    // .then((res) => res.json())
    // .then((data) => console.log(data))
  },
  true
);

const modifyHandler = (e) => {

}

// .catch(err => {
//   console.log(err);
// });

$todoUl.addEventListener("click", deletePostHandler);



