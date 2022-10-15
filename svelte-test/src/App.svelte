<script>
  import Todo from "./Todo.svelte";

  let todos = [
    { id: 1, done: "예정", text: "스벨트 공부하기" },
    { id: 2, done: "진행", text: "숨쉬기" }, 
    { id: 3, done: "완료", text: "경제적 자유 얻기" }
  ];

  function setId1() {
    todos[0] = { id: 1, done: "완료", text: "스벨트 공부하기" };
    todos = todos;
  }

  let refObj; // Todo의 this를 저장할 변수
</script>


<h2>Immutable 테스트</h2>
<button on:click={setId1}>스벨트 공부하기 완료 처리</button>
<p>immutable = false인 경우, 첫 번째 Todo 컴포넌트만 수정했지만 모든 컴포넌트의 count 값이 업데이트됨</p>
<p>immutable = True인 경우, 첫 번째 Todo 컴포넌트의 count 값만 업데이트됨</p>
{#each todos as todo}
  <Todo bind:todo={todo} />
{/each}

<h2>Accessors 테스트</h2>
<button on:click={() => { refObj.count = 100; }}>Todo Props 직접 접근하기</button>
<Todo todo={todos[0]} bind:this={refObj} />