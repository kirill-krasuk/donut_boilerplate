const routes = {
	home: {
		path: '/'
	},
	second: {
		path: '/second'
	},
	posts: {
		path: '/posts'
	},
	protect: {
		path   : '/protect',
		protect: true
	},
	404: {
		path: '*'
	}
} as const;

const protectRedirect = routes.home.path;

export { routes, protectRedirect };
