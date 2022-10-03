<script>
	import CustomSelect from "./CustomSelect.svelte";

	let fruit = "apple";

	let color = "yellow";
	let colorList = [
		{ code: "red", desc: "빨강" },
		{ code: "green", desc: "초록" },
		{ code: "blue", desc: "파랑" },
		{ code: "yellow", desc: "노랑" }
	];
	let param = {
		choice: "red",
		list: [
			{ code: "red", desc: "빨강" },
			{ code: "green", desc: "초록" },
			{ code: "blue", desc: "파랑" },
			{ code: "yellow", desc: "노랑" }
		]
	};
</script>

<main>
	<ul>
		<li>1. 하위 컴포넌트를 그대로 사용한 경우: <CustomSelect/></li>
		<li>개발자 B: <CustomSelect bind:choice={fruit}/> - {fruit} 선택됨</li> <!-- choice props에 fruit 전달 -->
		<li>개발자 C: <CustomSelect list={colorList} bind:choice={color}/></li>
		<li>Spread: <CustomSelect {...param}/> - {param.choice} 선택됨</li>
	</ul>
</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>