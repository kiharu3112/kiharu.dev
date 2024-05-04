<script>
	export let data;
</script>

<main>
	<article class="markdown-body">{@html data.content}</article>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	article {
		width: 100%;
		max-width: 900px;
		min-width: 300px;
	}
</style>
