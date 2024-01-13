<header>
	<div class="content-header">
		<h1><a href="/">*******</a></h1>
	</div>
</header>
<div class="content">
	<slot />
</div>

<footer>
	<p>© 2024 kiharu.dev</p>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #333;
	}
	header {
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 3rem;
		color: #ddd;
		background-color: #5e5184;
	}
	header a {
		margin: 0 1rem;
		text-decoration: none;
		color: #ddd;
		font-weight: bold;
	}
	.content-header {
		margin: 0 auto;
		padding: 0;
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header .content-header h1 a {
		padding: 0;
		margin: 0;
	}
	footer {
		margin-top: 2rem;
		text-align: center;
		color: #999;
	}
	.content {
		margin: 0 auto;
		padding: 0;
		width: 80%;
		background-color: #333;
		color: #fefefe;
	}
</style>
