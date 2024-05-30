<script>
	export let data;
</script>

<main>
	<h1>{data.title}</h1>
	<p>{data.date}</p>
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
	main h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	main p {
		font-size: 1rem;
		color: #d9d9d9;
		width: 100%	;
		text-align: left;
	}
	article {
		width: 100%;
		max-width: 900px;
		min-width: 300px;
	}
</style>
