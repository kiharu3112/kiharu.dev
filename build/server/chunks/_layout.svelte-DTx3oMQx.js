import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as null_to_empty, g as getContext } from './ssr-B9mA4kaB.js';
import './exports-DuWZopOC.js';

function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: "body{margin:0;padding:0;background-color:#5e5184}header.svelte-6t6dgs.svelte-6t6dgs{margin:0;display:flex;height:3rem;color:#ddd;background-color:#5e5184}header.svelte-6t6dgs a.svelte-6t6dgs{margin:0 1rem;text-decoration:none;color:#ddd;font-weight:bold}#link.svelte-6t6dgs.svelte-6t6dgs{display:flex;justify-content:space-between;align-items:end;height:100%;padding:0}#link.svelte-6t6dgs a.svelte-6t6dgs{text-decoration:none;color:#ddd;font-weight:bold;width:4.5rem;height:1.6rem;border-radius:1rem 1rem 0 0;display:flex;justify-content:center;padding:0;margin:0 0.5rem}.active.svelte-6t6dgs.svelte-6t6dgs{background-color:#333}.content-header.svelte-6t6dgs.svelte-6t6dgs{margin:0 auto;padding:0;width:80%;height:100%;max-width:900px;min-width:300px;display:flex;justify-content:space-between;align-items:center}header.svelte-6t6dgs .content-header h1 a.svelte-6t6dgs{padding:0;margin:0}footer.svelte-6t6dgs.svelte-6t6dgs{margin:0;padding:0;padding-top:1rem;text-align:center;color:#999;background-color:#333333}footer.svelte-6t6dgs p.svelte-6t6dgs{margin:0;padding:0}.content-background.svelte-6t6dgs.svelte-6t6dgs{background-color:#333;width:100%;height:100%;padding:0;margin:0}.content.svelte-6t6dgs.svelte-6t6dgs{margin:0 auto;padding:0;width:80%;max-width:900px;min-width:300px;background-color:#333;color:#fefefe}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="svelte-6t6dgs"><div class="content-header svelte-6t6dgs"><h1 class="title" data-svelte-h="svelte-xuzwgf"><a href="/" class="svelte-6t6dgs">*******</a></h1> <div id="link" class="svelte-6t6dgs"><a href="/"${add_attribute("aria-current", $page.url.pathname === "/", 0)} class="${escape(null_to_empty($page.url.pathname === "/" ? "active" : ""), true) + " svelte-6t6dgs"}">Home</a> <a href="/post"${add_attribute("aria-current", $page.url.pathname === "/post", 0)} class="${escape(null_to_empty($page.url.pathname.startsWith("/post") ? "active" : ""), true) + " svelte-6t6dgs"}">Post</a></div></div></header> <div class="content-background svelte-6t6dgs"><div class="content svelte-6t6dgs">${slots.default ? slots.default({}) : ``}</div></div> <footer class="svelte-6t6dgs" data-svelte-h="svelte-1fayc8d"><p class="svelte-6t6dgs">このサイトはSvelteKitを用いて作られています</p> <p class="svelte-6t6dgs">このサイトはCloudflare Analyticsを使用しています。</p> <p class="svelte-6t6dgs">© 2024 kiharu.dev</p> </footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DTx3oMQx.js.map
