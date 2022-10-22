<script>
  import { createEventDispatcher } from "svelte";
  export let todo; // 상위 컴포넌트에서 받아온 Props

  /* 상위 컴포넌트에 전달할 이벤트 */
  const dispatch = createEventDispatcher();
  const changeTodo = () => dispatch("changeTodo", todo);
  const removeTodo = () => dispatch("removeTodo", todo);

  /* 플래그 및 변수 */
  let isDone = todo.done; // 할 일 완료 여부
  let isChanging = false; // 할 일 수정 중 여부
  let changeBtnName = "수정"; // 버튼 이름(수정 <-> 완료)

  /* 수정 버튼 이벤트 처리 함수 */
  const handleChangeBtn = () => {
    isChanging = !isChanging;
    isChanging ? changeBtnName = "완료" : changeBtnName = "수정";
    changeTodo(); // change 이벤트를 상위 컴포넌트로 전달
  }
</script>

<div class="shadow-sm p-3 mb-3 bg-body rounded">
  <div class="row">
    <div class="col">
      <!-- 체크박스: 체크되어 있으면 취소선 표시 -->
      <input type="checkbox" checked={todo.done} on:click={() => isDone = !isDone}>

      <!-- 할 일 변경 중이면 입력 태그를, 아니면 텍스트 출력 -->
      {#if isChanging}
        <input type="text" class="input w-75" bind:value={todo.title}>
      {:else}
        <span class="{isDone ? 'done' : ''}">{todo.title}</span>
      {/if}
    </div>
    <div class="col-3">
      <!-- 수정/삭제 버튼 -->
      <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-primary" on:click={handleChangeBtn}>{changeBtnName}</button>
        <button type="button" class="btn btn-danger" on:click={removeTodo}>삭제</button>
      </div>
    </div>
  </div>
</div>

<style>
  .done {
    text-decoration: line-through;
    color: gray;
  }
</style>