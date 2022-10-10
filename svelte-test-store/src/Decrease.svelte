<script>
    // 1. 스토어 Import
    import { count } from "./store.js";

    // 버튼 비활성화 플래그
    let disabled = false;

    // 2. 스토어 자동 구독
    $:disabled = $count <= 1 ? true : false; // 스토어도 감지가 됨(이를 Store Binding이라고 함)
</script>

<button {disabled} on:click={() => { $count = $count - 1;}}>count 감소</button>