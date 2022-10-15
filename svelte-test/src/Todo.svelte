<svelte:options immutable={true} accessors={true} />

<script>
  import { afterUpdate } from "svelte";
  export let todo;

  // 컴포넌트 업데이트 확인용
  let count = 0;
  afterUpdate(() => count++ );
</script>

<p>[{todo.done}] {todo.text} ({count})</p>