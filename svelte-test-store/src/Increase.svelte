<script>
    // 1. 스토어 Import
    import { count } from "./store.js";
    import { onDestroy } from "svelte";

    // 버튼 비활성화 플래그
    let disabled = false;
    
    // 2. 구독 설정
    // 스토어 값이 100 이상이면 버튼을 비활성화
    const unsubscribe = count.subscribe((v) => {
        disabled = v >= 100? true : false;
    });

    // 3. 스토어 업데이트
    // 스토어에 저장하고 싶은 값을 update 함수 내의 콜백함수에서 반환해주면 됨
    function Increase() {
        count.update((n) => {
            return n + 1;
        });
    }

    // 4. 구독 종료
    onDestroy(unsubscribe);
</script>

<button disabled={disabled} on:click={Increase}>count 증가</button>
