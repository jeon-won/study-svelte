<script>
	import { flip } from "svelte/animate";
	import { quintOut } from "svelte/easing";
	
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

	function shuffle() {
		// 카드 번호 배열 섞기
		numbers = numbers.sort(() => 0.5 - Math.random());
	}
</script>

<main>
	<button on:click={shuffle}>섞기</button>
	<div>
		{#each numbers as number(number)}
			<button animate:flip>{number}</button>
			<!-- <button animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>{number}</button> -->
		{/each}
	</div>
</main>