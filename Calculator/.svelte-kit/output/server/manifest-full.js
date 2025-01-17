export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BqNQedNT.js","app":"_app/immutable/entry/app.IcOEAaWQ.js","imports":["_app/immutable/entry/start.BqNQedNT.js","_app/immutable/chunks/entry.U4_sW2_g.js","_app/immutable/chunks/runtime.Bu0T94yf.js","_app/immutable/chunks/index-client.LMJNOfdW.js","_app/immutable/entry/app.IcOEAaWQ.js","_app/immutable/chunks/runtime.Bu0T94yf.js","_app/immutable/chunks/render.MIjZPBaa.js","_app/immutable/chunks/disclose-version.CCy301RS.js","_app/immutable/chunks/proxy.BbzCVI0w.js","_app/immutable/chunks/index-client.LMJNOfdW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
