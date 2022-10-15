<script>
	import { marked } from "marked";
	export let name;

	marked.setOptions({
		renderer: new marked.Renderer(),
		highlight: function(code, lang) {
			const hljs = require('highlight.js');
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
  		},
		gfm: true,
	});

	let mark = `
Svelte Markdown 테스트

# 제목

**진하게**

_이탤릭_

~~취소선~~

> 인용

[링크텍스트](https://github.com/jeon-won)

![](https://images.velog.io/images/jeonwon/post/b4e4ae50-eabc-4de1-b021-3c20a351edfd/277315121_385607339768767_3361049751274918311_n.jpg)

코드블록은 백틱 문자 3개를 연달아 사용해야 하는데, 자바스크립트 백틱 문자 안에 백틱 문자를 어떻게 표현해야 하는지 모르게씀...

|ㅁㄴㅇㄹ|ㅁㄴㅇㄹ|
|------|------|
|1234|asdf|

\`\`\`python
<html>
<head>
\`\`\`
`;

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{@html marked(mark, {
		gfm: true,
		asdf: true
	})}
</main>

<style>
	main {
		text-align: center;
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