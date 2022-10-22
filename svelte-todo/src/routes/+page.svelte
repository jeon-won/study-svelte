<!-- 참고 중... https://hoontae24.github.io/4 -->

<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import { onDestroy } from "svelte";
  import Todo from "../Todo.svelte";
  import { todos } from "../todos";

  /* 스토어 구독: 스토어 값이 변경될 때마다 스토어 값 콘솔 출력 */
  const unsubscribe = todos.subscribe((v) => {
    console.log(v);
  });

  /* 컴포넌트가 파괴될 때 스토어 구독 종료 */
  onDestroy(unsubscribe);

  /* 변수 */
  let inputTodo = ""; // 입력된 할 일 값
  let refInput; // 할 일을 입력 받는 input 태그에 포커스를 맞추기 위한 참조 변수

  /* 이벤트 처리 함수 */
  // input 태그 내 엔터 키 입력 이벤트 처리 함수
  const handleEnterKey = () => {
    if(window.event.keyCode == 13) {
      if(inputTodo === ""){ // 입력 값이 비어 있으면 경고 띄운 후 포커스 맞춤
        alert("할 일을 입력해주세요.");
        refInput.focus();
        return;
      }

      todos.add(inputTodo); // 입력 값을 스토어에 저장
      inputTodo = "";
    }
  }

  // 추가 버튼 클릭 이벤트 처리 함수
  const handleAddBtn = () => {
    if(inputTodo === ""){ // 입력 값이 비어 있으면 경고 띄운 후 포커스 맞춤
      alert("할 일을 입력해주세요.");
      refInput.focus();
      return;
    }

    todos.add(inputTodo); // 입력 값을 스토어에 저장
    inputTodo = "";
  }

  // 취소 버튼 클릭 이벤트 함수
  const handleCancelBtn = () => {
    inputTodo = ""; // 입력 값을 초기화 하고 포커스 맞춤
    refInput.focus();
  }

  /* 하위(Todo) 컴포넌트에서 보내온 이벤트를 처리하는 함수 */
  const removeTodo = (e) => todos.remove(e.detail);
  const changeTodo = (e) => todos.update(e.detail);  
</script>

<!-- 네비게이션 바 -->
<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <!-- <img src="https://avatars.githubusercontent.com/u/56036601?v=4" alt="Avatar Logo" style="width:40px;" class="rounded-pill">   -->
      <span>Svelte App</span>
    </a>
  </div>
</nav>

<!-- 메인 항목 -->
<main class="container p-3">
  <!-- 제목 -->
  <h1 class="text-center">TODO LIST</h1>

  <!-- Todo 입력 -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="무엇을 해야 하나요?" bind:value={inputTodo} bind:this={refInput} on:keyup={handleEnterKey}>
    <label for="floatingInput">무엇을 해야 하나요?</label>
  </div>

  <!-- 추가/취소 버튼 -->
  <div class="row">
    <div class="col">
      <button class="btn btn-primary w-100 p-2" on:click={handleAddBtn}>추가</button>
    </div>
    <div class="col">
      <button class="btn btn-danger w-100 p-2" on:click={handleCancelBtn}>취소</button>
    </div>
  </div>

  <!-- Todo 컴포넌트 배치 -->
  {#each $todos as todo (todo.id)}
    <Todo todo={todo} on:removeTodo={removeTodo} on:changeTodo={changeTodo}/>
  {/each}
</main>

<style>
  /* 구글폰트 import 후 모든 HTML 요소에 나눔고딕 적용 */
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  
  * {
    font-family: 'Nanum Gothic', sans-serif;
  }

  h1 {
    color: #F22208;
  }
</style>