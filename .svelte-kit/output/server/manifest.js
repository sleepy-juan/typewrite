export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "typewrite/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CQ9pFenb.js","app":"_app/immutable/entry/app.BsHQPQ6p.js","imports":["_app/immutable/entry/start.CQ9pFenb.js","_app/immutable/chunks/entry.Dzx-HH5e.js","_app/immutable/chunks/scheduler.u2sAWruA.js","_app/immutable/entry/app.BsHQPQ6p.js","_app/immutable/chunks/scheduler.u2sAWruA.js","_app/immutable/chunks/index.Cjm2oGyn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
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
