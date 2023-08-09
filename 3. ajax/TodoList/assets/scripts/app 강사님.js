const URL = "http://localhost:5000/todos";

const $todoList = document.querySelector(".todo-list");

// step1. db.json에 있는 todos를 화면에 렌더링하기
const fetchTodos = (url, method = "GET", payload = null) => {
  const requestInit = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) => {
  // li태그의 템플릿을 가져옴
  const $liTemplate = document.getElementById("single-todo");

  todoList.forEach(({ id, text, done }) => {
    // console.log('todo: ', todo);
    const $newLi = document.importNode($liTemplate.content, true);
    $newLi.querySelector("li").dataset.id = id; // data-id 속성 부여
    $newLi.querySelector(".text").textContent = text;

    // 체크박스 가져오기
    const $checkbox = $newLi.querySelector(".checkbox input[type=checkbox]");
    // console.dir($checkbox);
    $checkbox.checked = done;

    done && $checkbox.parentNode.classList.add("checked");

    $todoList.appendChild($newLi);
  });
};

// ========= 이벤트 관련 함수 ========= //
const addTodoHandler = (e) => {
  // 1. 클릭이벤트가 잘 일어나나?
  // console.log('클릭!');

  // 2. 클릭하면 일단 왼쪽에 인풋의 텍스트를 읽어야 함.
  // 2-1. 인풋부터 찾자
  const $textInput = document.getElementById("todo-text");
  // 2-2. 인풋 안에 텍스트를 꺼내자
  const inputText = $textInput.value;

  // 3. 그럼 서버에 이 데이터를 보내서 저장해야 하는데?
  // -> fetch가 필요하겠다. 저장이니까 POST해야겠다.
  // -> payload를 API 스펙에 맞게 만들어 보내야 함
  const payload = {
    text: inputText,
    done: false,
  };
  fetchTodos(URL, "POST", payload).then((res) => {
    if (res.status === 200 || res.status === 201) {
      console.log("등록 성공!");
    } else {
      console.log("등록 실패!");
    }
  });
};

// step2. 할 일 등록 기능
const $addBtn = document.getElementById("add");
$addBtn.addEventListener("click", addTodoHandler);

// step3. 할 일 삭제 기능
const deleteTodoHandler = (e) => {
  if (!e.target.matches(".remove span")) return;

  if (!confirm("정말 삭제하실 건가요?")) return;
  // 특정 할일을 지우기 위해 클릭한 할일의 id값을 알아야 함
  const id = e.target.closest(".todo-list-item").dataset.id;
  // console.log(id);

  // 서버에 삭제 요청하기
  fetchTodos(`${URL}/${id}`, "DELETE").then((res) => {
    if (res.status === 200) {
      console.log("등록 성공!");
    } else {
      console.log("등록 실패!");
    }
  });
};

$todoList.addEventListener("click", deleteTodoHandler);

// step4. 할 일 완료 체크 처리
const checkTodoHandler = (e) => {
  // console.log(`체크박스 누름`, e.target);

  // 1. 서버에 수정요청을 보내서 누른 그 할일의
  // done을 반대값으로 수정해야 함.
  // 1-1. 현재 체크값인 t, f인지 알아야 반대로 바꾸는데...
  console.log(e.target.checked); // 현재상태의 체크를 가리킴..

  const id = e.target.closest(".todo-list-item").dataset.id;
  fetchTodos(`${URL}/${id}`, "PATCH", {
    done: e.target.checked,
  });
};

$todoList.addEventListener("change", checkTodoHandler);

// 수정 내가 만든거
// const modifyTodoHandler = (e) => {
//   if (!e.target.matches(".modify span")) return;

//   const id = e.target.closest(".todo-list-item").dataset.id;

//   const $targetadd = e.target.parentNode.parentNode.querySelector("#addtext");
//   const $targettext = e.target.parentNode.parentNode.querySelector(".text");
//   let word = null;
//   if ($targetadd.classList.value === "visible") {
//     $targetadd.classList.add("modify-input");
//     $targetadd.classList.remove("visible");
//     $targettext.classList.add("visible");
//     $targetadd.value = $targettext.textContent;
//   } else {
//     word = $targetadd.value;
//     fetchTodos(`${URL}/${id}`, "PATCH", {
//       text: word,
//     }).then((res) => {
//       if (res.status === 200 || res.status === 201) {
//         console.log("등록 성공!");
//       } else {
//         console.log("등록 실패!");
//       }
//     });

//     $targetadd.classList.remove("modify-input");
//     $targetadd.classList.add("visible");
//     $targettext.classList.remove("visible");
//   }
// };
// $todoList.addEventListener("click", modifyTodoHandler);


// step5. 할 일 수정 처리
//수정 모드 진입하는 함수
const enterModifyMode = ($undo) => {
  //클래스 이름을 변경하여 아이콘을 바꾸자
  // => 클릭한 span태그 노드를 가져와야 함.
  $undo.classList.replace('lnr-undo', 'lnr-checkmark-circle');

  // $undo근처에 있는 span.text를 가져와야함
  const $textSpan = $undo.closest('.todo-list-item').querySelector('.text');
  
  // 교체할 Input을 생성한다.
  const $modInput = document.createElement('input');
  $modInput.classList.add('modify-input');
  $modInput.setAttribute('type', 'text');
  $modInput.value = $textSpan.textContent;

  // span을 input으로 교체하기
  const $label = $textSpan.parentNode;
  $label.replaceChild($modInput, $textSpan);
};

const modifyTodo = ($checkMark) => {
  const $li = $checkMark.closest('.todo-list-item');
  const id = $li.dataset.id;
  const newText = $li.querySelector('.modify-input').value;
  
  fetchTodos(`${URL}/${id}`, 'PATCH', {
    text: newText
  })
};

//수정 이벤트 처리 핸들러
const modifyTodoHandler = e => {
  if (e.target.matches('.modify span.lnr-undo')) {
    enterModifyMode(e.target); // 수정 모드 진입하기
  } else if (e.target.matches('.modify span.lnr-checkmark-circle')) {
    modifyTodo(e.target); // 서버 수정요청 보내기
  }
};
$todoList.addEventListener('click', modifyTodoHandler);










// =========== 앱 실행 =========== //
const init = () => {
  fetchTodos(URL)
    .then((res) => res.json())
    .then((todos) => {
      renderTodos(todos);
    });
};

init();
