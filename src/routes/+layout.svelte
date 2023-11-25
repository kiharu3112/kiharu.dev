<script>
    import { page } from "$app/stores";
</script>
<header>
  <div class="content-header">
    <h1><a href="/">kiharu.dev</a></h1>
    <a href="https://github.com/kiharu3112" target="_blank" rel="noopener noreferrer"><img src="github-mark.svg" alt="GitHub" /></a>
  </div>
</header>
<div class="content">
  <slot/>
</div>

<footer>
  <p>© 2023 kiharu.dev</p>
</footer>

<style>
    header {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #eee;
        height: 3rem;
        color: black;
    }
    header a {
        margin: 0 1rem;
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    header img {
        height: 1.5rem;
        margin-right: 0.5rem;
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
    }
</style>