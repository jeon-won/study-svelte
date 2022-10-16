<script>
  import { createEventDispatcher } from "svelte";
  export let todo; // 상위 컴포넌트에서 받아온 Props

  /* 상위 컴포넌트에 전달할 이벤트 */
  const dispatch = createEventDispatcher();
  const changeTodo = () => dispatch("change", todo);
  const removeTodo = () => dispatch("remove", todo);

  /* 플래그 */
  let isDone = todo.done;
  let isChanging = false;
  let changeBtnName = "수정";

  /* 수정 이벤트 처리기 */
  const handleChange = () => {
    isChanging = !isChanging;
    isChanging ? changeBtnName = "완료" : changeBtnName = "수정";
    changeTodo(); // change 이벤트를 상위 컴포넌트로 전달
  }
</script>

<div class="shadow-sm p-3 mb-1 bg-body rounded">
  <input type="checkbox" checked={todo.done} on:click={() => isDone = !isDone}>

  <!-- 할 일 변경 중이면 입력 박스를, 아니면 텍스트 출력 -->
  {#if isChanging}
    <input type="text" bind:value={todo.title}>
  {:else}
    <span class="{isDone ? 'done' : ''}">{todo.title}</span>
  {/if}

  <!-- 수정/삭제 버튼 -->
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-primary" on:click={handleChange}>{changeBtnName}</button>
    <button type="button" class="btn btn-danger" on:click={removeTodo}>삭제</button>
  </div>
</div>

<style>
  .done {
    text-decoration: line-through;
    color: gray;
  }
</style>