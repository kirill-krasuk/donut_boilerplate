import type webpack from 'webpack';

type IsomorphicLoader = {
	client: webpack.RuleSetRule,
	server: webpack.RuleSetRule
};

export type { IsomorphicLoader };
