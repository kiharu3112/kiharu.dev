const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.OFqIJHIK.js","app":"_app/immutable/entry/app.Cwae9Vmn.js","imports":["_app/immutable/entry/start.OFqIJHIK.js","_app/immutable/chunks/entry.Bs7YLkvK.js","_app/immutable/chunks/scheduler.ckP9rlDS.js","_app/immutable/entry/app.Cwae9Vmn.js","_app/immutable/chunks/scheduler.ckP9rlDS.js","_app/immutable/chunks/index.CjarM-oL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-QZcROEzh.js')),
			__memo(() => import('./chunks/1-C-w70snG.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/post","/post/__data.json","/post/HelloWorld","/post/HelloWorld/__data.json"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
