<script>
  import { writable } from "svelte/store";

  let todo = [
    { id: 0, todo: '숨 쉬기', done: false},
    { id: 1, todo: '스벨트 공부하기', done: false},
    { id: 2, todo: '유튜브 보기', done: true}
  ]

  export const todos = writable(10);
</script>