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
				href="/post"
				aria-current={$page.url.pathname === '/post'}
				class={$page.url.pathname.startsWith('/post') ? 'active' : ''}>Post</a
			>
		</div>
	</div>
</header>
<div class="content-background">
	<div class="content">
		<slot />
	</div>
</div>

<footer>
	<p>このサイトはSvelteKitを用いて作られています</p>
	<p>このサイトはCloudflare Analyticsを使用しています。</p>
	<p>© 2025 kiharu.dev</p>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #5e5184;
		--shiki-dark-bg: #181421;
	}
	:root {
		--shiki-dark-bg: #181421;
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
		padding: 0;
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
		min-width: 300px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header .content-header h1 a {
		padding: 0;
		margin: 0;
	}
	footer {
		margin: 0;
		padding: 0;
		padding-top: 1rem;
		text-align: center;
		color: #999;
		background-color: #333333;
	}
	footer p {
		margin: 0;
		padding: 0;
	}
	.content-background {
		background-color: #333;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
	.content {
		margin: 0 auto;
		padding: 0;
		width: 80%;
		max-width: 900px;
		min-width: 300px;
		background-color: #333;
		color: #fefefe;
	}
</style>
