<!-- 참고 중... https://hoontae24.github.io/4 -->

<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import { onDestroy } from "svelte";
  import Todo from "../Todo.svelte";
  import { todos } from "../todos";

  const unsubscribe = todos.subscribe((v) => {
    console.log(v);
  });

  let inputTodo = "";
  const addTodo = () => {
    if(window.event.keyCode == 13) {
      if(inputTodo === ""){
        alert("할 일을 입력해주세요.");
        return;
      }

      todos.add(inputTodo);     
      inputTodo = "";
    }
  }

  const removeTodo = (e) => todos.remove(e.detail);
  const changeTodo = (e) => todos.update(e.detail);

  onDestroy(unsubscribe);

</script>

<!-- 네비게이션 바 -->
<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <!-- <img src="https://avatars.githubusercontent.com/u/56036601?v=4" alt="Avatar Logo" style="width:40px;" class="rounded-pill">   -->
      <span>Svelte App</span>
    </a>
  </div>
</nav>

<!-- 메인 항목 -->
<main class="container p-3">
<h1 class="text-center">TODO LIST</h1>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="무엇을 해야 하나요?" bind:value={inputTodo} on:keyup={addTodo}>
  <label for="floatingInput">무엇을 해야 하나요?</label>
</div>

{#each $todos as todo (todo.id)}
  <Todo {todo} on:remove={removeTodo} on:change={changeTodo}/>
{/each}


</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  
  * {
    font-family: 'Nanum Gothic', sans-serif;
  }
  
  h1 {
    color: #F22208;
  }
</style>