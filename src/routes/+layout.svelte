<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="content-header">
		<h1 class="title"><a href="/">*******</a></h1>
		<div id="link">
			<a
				href="/"
				aria-current={$page.url.pathname === '/'}
				class={$page.url.pathname === '/' ? 'active' : ''}>Home</a
			>
			<a
				href="/blog"
				aria-current={$page.url.pathname === '/blog'}
				class={$page.url.pathname === '/blog' ? 'active' : ''}>Blog</a
			>
		</div>
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
	#link {
		display: flex;
		justify-content: space-between;
		align-items: end;
		height: 100%;
		padding: none;
	}
	#link a {
		text-decoration: none;
		color: #ddd;
		font-weight: bold;
		width: 4.5rem;
		height: 1.6rem;
		border-radius: 1rem 1rem 0 0;
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 0 0.5rem;
	}
	.active {
		background-color: #333;
	}
	.content-header {
		margin: 0 auto;
		padding: 0;
		width: 80%;
		height: 100%;
		max-width: 900px;
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
		max-width: 900px;
		background-color: #333;
		color: #fefefe;
	}
</style>
