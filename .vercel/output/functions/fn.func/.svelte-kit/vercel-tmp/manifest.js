export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["UMASS-UNBOXED-FULL.png","UMASS-UNBOXED-SHORT.png","categories/clothing.png","categories/decoration.png","categories/entertainment.png","categories/free-stuff.png","categories/furniture.png","categories/school-supplies.png","categories/special-deals.png","categories/sports-goods.png","categories/tech-and-electronics.png","categories/textbooks.png","categories/umass-merch.png","central.jpg","clipboard.svg","favicon.png","gloves.jpg","hacklogo.jpg","home-basic.svg","honors.jpg","image-preview.png","mail.jpg","meta.jpg","northeast.jpg","ohill.jpg","pc.jpg","pen.avif","person.svg","profile-icon-red.png","profile.jpg","propel.jpg","search-animate.gif","search-static.png","southwest.jpg","sylvan.jpg","umass-bg.jpg","umass-merch.jpg","vision.jpg","white-profile.png","wipes.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".avif":"image/avif",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.CocW6qbU.js","app":"_app/immutable/entry/app.Cvl2-glh.js","imports":["_app/immutable/entry/start.CocW6qbU.js","_app/immutable/chunks/entry.BgBoINHW.js","_app/immutable/chunks/scheduler.B8VM0AVf.js","_app/immutable/entry/app.Cvl2-glh.js","_app/immutable/chunks/scheduler.B8VM0AVf.js","_app/immutable/chunks/index.-yzd7wty.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
