<script>
	// postsにあるmarkdownファイルを取得
	export let data;
</script>

<main>
	<h1>記事一覧</h1>
	<ul>
		{#each data.posts as post}
			<a href={'/post/' + post}>
				<ol class="post">
					{post}
				</ol>
			</a>
		{/each}
	</ul>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 900px;
		min-width: 300px;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.post {
		font-size: 1rem;
		color: #eb82dc;
	}
	ul,
	ol {
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline #eb82dc;
	}
</style>
