// 1. Derived Store 패키지 Import
import { writable, readable, derived } from "svelte/store";

/* start, const, time: Derived Store에서 사용하기 위한 변수 및 스토어 */
const start = new Date();
export const count = writable(10);
export const time = readable(new Date(), function start(set) {
    console.log("Readable Store 구독 시작");
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        console.log("Readable Store 구독 종료")
        clearInterval(interval);
    };
})

// 2. Derived Store 생성
//  * derived 함수의 첫 번째 파라미터는 원본 스토어
//  * derived 함수의 두 번째 파라미터는 무기명 함수(원본 스토어가 변경될 때마다 호출할 콜백 함수)
export const power = derived(count, $count => $count * $count); // count의 제곱 계산

// derived 함수에서 사용하는 무기명 함수의 매개변수는 2개인 경우가 있음
// * 첫 번째 매개변수: 스토어 값
// * 두 번째 매개변수: set 함수(새롭게 계산된 값을 derived 스토어에 저장하는 함수)
export const elapsed = derived(time, ($time, set) => {
    // 단순 계산인 경우 set 함수를 사용하는 건 권장하지 않으나, 연습용으로...
    set(Math.round($time - start) / 1000); // 접속 후 몇 초나 지났는지 계산
    return () => {
        // 실행이 종료되었을 때 실행할 코드
    };
});