<script>
	import { count } from "./store.js"; // count라는 스토어 Import
	import { get } from "svelte/store"; // get 함수 Import
</script>

<main>
	<h1>1. `$STORE_NAME`으로 스토어 객체에 접근하는 경우</h1>
	<p>count의 값은 {$count}입니다.</p>
	<h1>2. subscribe의 콜백 함수에서 넘겨 받는 매개변수로 스토어 값에 접근하는 경우</h1>
	<p>이건 subscribe 함수 내에서 접근...</p>
	<h1>3. get 함수를 사용하여 접근하는 경우</h1>
	<p>count의 값은 {get(count)}입니다.</p>
</main>