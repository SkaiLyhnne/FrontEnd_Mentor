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
		client: {"start":"_app/immutable/entry/start.DWIoRDLw.js","app":"_app/immutable/entry/app.CoAl9IIn.js","imports":["_app/immutable/entry/start.DWIoRDLw.js","_app/immutable/chunks/entry.BSkNrcYa.js","_app/immutable/chunks/runtime.D3G8I-O9.js","_app/immutable/chunks/index-client.DnoOM2dw.js","_app/immutable/entry/app.CoAl9IIn.js","_app/immutable/chunks/runtime.D3G8I-O9.js","_app/immutable/chunks/render.D1IHxJdy.js","_app/immutable/chunks/disclose-version.D6lq66xp.js","_app/immutable/chunks/index-client.DnoOM2dw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
