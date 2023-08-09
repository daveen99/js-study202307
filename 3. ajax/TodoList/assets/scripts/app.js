const URL = "http://localhost:5000/todos";

// Form
const $form = document.querySelector(".todo-insert");
// Ul
const $todoUl = document.querySelector(".todo-list");
// 추가버튼
const $addbtn = document.getElementById("add");
//수정버튼

const fetchTodos = (url, method='GET', payload=null) => {
  const requestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// fetch(URL)
//   .then((res) => res.json())
//   .then((todo_list) => {
//     // console.log(todo_list);

//     const $TodoTemplate = document.getElementById("todo-template");

//     todo_list.forEach(({ id, text, done }) => {
//       const $todoLi = document.importNode($TodoTemplate.content, true);

//       $todoLi.querySelector("li").dataset.postId = id;
//       $todoLi.querySelector(".text").textContent = text;
//       $todoLi.querySelector("input").textContent = done;
//       // $todoLi.querySelector(".checkbox").textContent = done;

//       $todoUl.appendChild($todoLi);
//     });
//   });

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById('todo-template');

  todoList.forEach(({ id, text, done }) => {
    // console.log('todo: ', todo);
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector('li').dataset.id = id; // data-id 속성 부여
    $newLi.querySelector('.text').textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]');
    // console.dir($checkbox);
    $checkbox.checked = done;

    done && $checkbox.parentNode.classList.add('checked');

    $todoUl.appendChild($newLi);
    console.log($todoUl);
  });
};

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
  e.preventDefault();
  if (e.target.matches(".modify span")) {
    // const id = e.target.closest(".todo-list-item").dataset.postId;
    const id = e.target.closest('.todo-list-item').dataset.id;
    const $addtext = e.target.parentNode.parentNode.querySelector('#addtext');
    const $beforemodi = e.target.parentNode.parentNode.querySelector('.text');
    console.log('before',$beforemodi.textContent);
    const $word = $addtext.value;
    // if (!$addtext.value === null) {
    //   $beforemodi.textContent = $addtext.value;
    //   return;
    // }
    $addtext.value = $beforemodi.textContent;
    // console.log('add',$addtext.value);
    // console.log(getText);
    // $addtext.value = getText;
    // console.log($addtext.value);

    console.log($word);
    if ($addtext.classList.value === "modify-input") {
      $beforemodi.textContent = $word;
      $addtext.classList.add("visible");
      $addtext.classList.remove("modify-input");
      $beforemodi.classList.remove("visible");

      fetchTodos(`${URL}/${id}`, 'PATCH', {
        text: $word 
      });
    } else {
      $addtext.classList.remove("visible");
      $addtext.classList.add("modify-input");
      $beforemodi.classList.add("visible");
    }
  }

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


// $todoUl.addEventListener(
//   "change",
//   (e) => {
//     e.preventDefault();
//     if (!e.target.matches(".checkbox input[type=checkbox]")) return;

//     // console.log('?:', e.target);

//     const id = e.target.closest(".todo-list-item").dataset.postId;
//     let payload;
//     if (e.target.checked) {
//       payload = {
//         done: true,
//       };
//     } else {
//       payload = {
//         done: false,
//       };
//     }
//     fetch(`${URL}/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });
//     // .then((res) => res.json())
//     // .then((data) => console.log(data))
//   },
//   true
// );

// const modifyHandler = (e) => {};

// .catch(err => {
//   console.log(err);
// });

$todoUl.addEventListener("click", deletePostHandler);


// =========== 앱 실행 =========== //
const init = () => {
  fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
      renderTodos(todos);
    });
};

init();